import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import db from "./db.js";

const app = express();
const PORT = Number(process.env.PORT || 5000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const JWT_SECRET = process.env.JWT_SECRET || "dev-only-change-me";


app.use(helmet({
  crossOriginResourcePolicy: {policy:"cross-origin"}
}));
app.use(cors({origin: CLIENT_ORIGIN}));
app.use(express.json({limit:"50kb"}));

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {message:"Too many inquiries from this IP. Please try again later."}
});

const allowedTypes = new Set([
  "Wedding","Corporate Event","Conference & Seminar",
  "Private Celebration","Exhibition & Launch","Theme Event"
]);

function clean(value, max=2000) {
  return String(value ?? "").trim().slice(0,max);
}
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function auth(req,res,next) {
  const token = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7) : null;
  if (!token) return res.status(401).json({message:"Authentication required."});
  try { req.admin = jwt.verify(token, JWT_SECRET); next(); }
  catch { return res.status(401).json({message:"Invalid or expired token."}); }
}

app.get("/api/health", (_req,res)=>res.json({ok:true,service:"EventSphere API"}));

app.post("/api/event-concept", async (req, res) => {
  try {
    const {
      eventType,
      guests,
      style,
      palette,
      venue,
      date,
      notes
    } = req.body;

    if (!eventType || !guests || !style) {
      return res.status(400).json({
        message: "Event type, guests and style are required."
      });
    }

    const prompt = `
Premium luxury event photography.

Create a photorealistic professional event design for:

Event: ${eventType}
Guests: ${guests}
Style: ${style}
Colour palette: ${palette || "elegant neutral tones"}
Venue: ${venue || "luxury event venue"}
Date: ${date || "not specified"}
Client vision: ${notes || "none"}

Show:
- sophisticated event decoration
- professionally styled venue
- elegant tables and seating
- beautiful flowers
- premium ambient lighting
- realistic materials
- luxury event planner aesthetic
- cinematic professional photography
- highly realistic
- no text
- no logo
- no watermark
`;

    const encodedPrompt = encodeURIComponent(prompt);

    const imageUrl =
      `https://gen.pollinations.ai/image/${encodedPrompt}` +
      `?model=flux&width=1024&height=1024&nologo=true&key=${process.env.POLLINATIONS_API_KEY}`;

    res.json({
      ok: true,
      image: imageUrl
    });

  } catch (error) {
    console.error("Event concept generation error:", error);

    res.status(500).json({
      message: "Unable to generate the event concept."
    });
  }
});

app.post("/api/inquiries", inquiryLimiter, (req,res)=>{
  const name = clean(req.body.name,100);
  const email = clean(req.body.email,160);
  const phone = clean(req.body.phone,40);
  const eventType = clean(req.body.eventType,80);
  const eventDate = clean(req.body.eventDate,20);
  const message = clean(req.body.message,3000);
  const guestsRaw = req.body.guests;
  const guests = guestsRaw === "" || guestsRaw == null ? null : Number(guestsRaw);

  if (!name || name.length < 2) return res.status(400).json({message:"Please enter a valid name."});
  if (!validEmail(email)) return res.status(400).json({message:"Please enter a valid email."});
  if (!phone || phone.length < 7) return res.status(400).json({message:"Please enter a valid phone number."});
  if (!allowedTypes.has(eventType)) return res.status(400).json({message:"Please select a valid event type."});
  if (!message || message.length < 10) return res.status(400).json({message:"Please tell us a little more about your event."});
  if (guests !== null && (!Number.isInteger(guests) || guests < 1 || guests > 100000)) {
    return res.status(400).json({message:"Guest count must be a whole number between 1 and 100,000."});
  }

  const stmt = db.prepare(`
    INSERT INTO inquiries (name,email,phone,event_type,event_date,guests,message)
    VALUES (?,?,?,?,?,?,?)
  `);
  const result = stmt.run(name,email,phone,eventType,eventDate || null,guests,message);
  res.status(201).json({ok:true,id:result.lastInsertRowid});
});

app.post("/api/admin/login", inquiryLimiter, (req,res)=>{
  const email = clean(req.body.email,160);
  const password = String(req.body.password || "");
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({message:"Invalid admin credentials."});
  }
  const token = jwt.sign({email,role:"admin"}, JWT_SECRET,{expiresIn:"4h"});
  res.json({token});
});

app.get("/api/admin/inquiries", auth, (_req,res)=>{
  const rows = db.prepare(`
    SELECT id,name,email,phone,event_type AS eventType,event_date AS eventDate,guests,message,created_at AS createdAt
    FROM inquiries ORDER BY id DESC
  `).all();
  res.json({items:rows});
});

app.use((err,_req,res,_next)=>{
  console.error(err);
  res.status(500).json({message:"Internal server error."});
});

export default app;
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const initial = { name:"", email:"", phone:"", eventType:"", eventDate:"", guests:"", message:"" };

export default function InquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({loading:false, ok:false, error:""});

  const change = e => setForm({...form, [e.target.name]: e.target.value});

  async function submit(e) {
    e.preventDefault();
    setStatus({loading:true, ok:false, error:""});
    try {
      const res = await fetch("/api/inquiries", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to send inquiry.");
      setStatus({loading:false, ok:true, error:""});
      setForm(initial);
    } catch (err) {
      setStatus({loading:false, ok:false, error:err.message});
    }
  }

  if (status.ok) {
    return (
      <motion.div className="success-box" initial={{opacity:0, scale:.97}} animate={{opacity:1, scale:1}}>
        <CheckCircle2 size={46}/>
        <h3>Thank you.</h3>
        <p>Your event inquiry has been received. EventSphere will get back to you shortly.</p>
        <button className="gold-btn" onClick={() => setStatus({loading:false,ok:false,error:""})}>Send another inquiry</button>
      </motion.div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input required name="name" value={form.name} onChange={change} placeholder="Your name"/></label>
        <label>Email<input required type="email" name="email" value={form.email} onChange={change} placeholder="you@example.com"/></label>
        <label>Phone<input required name="phone" value={form.phone} onChange={change} placeholder="+92 ..."/></label>
        <label>Event Type
          <select required name="eventType" value={form.eventType} onChange={change}>
            <option value="">Select one</option>
            <option>Wedding</option><option>Corporate Event</option><option>Conference & Seminar</option>
            <option>Private Celebration</option><option>Exhibition & Launch</option><option>Theme Event</option>
          </select>
        </label>
        <label>Preferred Date<input type="date" name="eventDate" value={form.eventDate} onChange={change}/></label>
        <label>Expected Guests<input type="number" min="1" max="100000" name="guests" value={form.guests} onChange={change} placeholder="Approx. guests"/></label>
      </div>
      <label>Tell us about your event<textarea required name="message" value={form.message} onChange={change} rows="5" placeholder="Venue, style, date, budget range or anything else you want us to know..."/></label>
      {status.error && <div className="form-error">{status.error}</div>}
      <button className="gold-btn" disabled={status.loading} type="submit">
        {status.loading ? "Sending..." : <>Send Inquiry <Send size={17}/></>}
      </button>
      <small className="privacy-note">By submitting, you agree that EventSphere may use these details only to respond to your event inquiry.</small>
    </form>
  );
}

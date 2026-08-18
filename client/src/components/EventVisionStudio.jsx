import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  MapPin,
  Palette,
  CalendarDays,
  ArrowRight,
  WandSparkles,
  CheckCircle2,
  RotateCcw
} from "lucide-react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Conference",
  "Private Celebration",
  "Exhibition / Launch",
  "Theme Event"
];

const styles = [
  "Luxury & Elegant",
  "Modern & Minimal",
  "Romantic",
  "Classic & Grand",
  "Bold & Creative",
  "Garden / Outdoor"
];

const palettes = [
  "Champagne & Red",
  "Black & Gold",
  "Ivory & Champagne",
  "Burgundy & Gold",
  "White & Green",
  "Custom"
];

const venues = [
  "Luxury Ballroom",
  "Outdoor Garden",
  "Hotel / Resort",
  "Rooftop",
  "Conference Hall",
  "Not Decided Yet"
];

function buildConcept(form) {
  const type = form.eventType || "your event";
  const style = form.style || "Luxury & Elegant";
  const palette = form.palette || "Champagne & Red";
  const guests = form.guests || "your guests";
  const venue = form.venue || "your chosen venue";

  return {
    title:
      type === "Wedding"
        ? "A Celebration Made Around Your Story"
        : `${style} ${type} Experience`,

    description:
      `A ${style.toLowerCase()} ${type.toLowerCase()} designed for approximately ${guests} guests, combining ${palette.toLowerCase()} tones with a carefully styled ${venue.toLowerCase()} setting.`,

    details: [
      {
        title: "Atmosphere",
        text:
          style === "Luxury & Elegant"
            ? "Sophisticated, intimate and polished with layered lighting and refined details."
            : `A ${style.toLowerCase()} atmosphere with carefully coordinated décor and guest experiences.`
      },
      {
        title: "Colour Direction",
        text:
          palette === "Custom"
            ? "Your custom palette will be developed around your personal vision."
            : `${palette} with complementary neutral tones and subtle metallic accents.`
      },
      {
        title: "Guest Experience",
        text:
          `Thoughtful arrival, comfortable seating, curated décor and smooth movement for approximately ${guests} guests.`
      },
      {
        title: "Venue Styling",
        text:
          `${venue} styling with statement décor, ambient lighting and coordinated event details.`
      }
    ]
  };
}

export default function EventVisionStudio() {
  const [form, setForm] = useState({
    eventType: "",
    guests: "",
    style: "",
    palette: "",
    venue: "",
    date: "",
    notes: ""
  });

  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(false);

  const progress = useMemo(() => {
    const fields = [
      form.eventType,
      form.guests,
      form.style,
      form.palette,
      form.venue
    ];

    return Math.round(
      (fields.filter(Boolean).length / fields.length) * 100
    );
  }, [form]);

  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const generateConcept = async () => {
  if (!form.eventType || !form.guests || !form.style) {
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:5000/api/event-concept",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to generate event concept."
      );
    }

    setConcept({
      ...buildConcept(form),
      image: data.image
    });

  } catch (error) {
    console.error(error);

    alert(
      error.message ||
      "Something went wrong while generating your event concept."
    );

  } finally {
    setLoading(false);
  }
};

  const resetPlanner = () => {
    setForm({
      eventType: "",
      guests: "",
      style: "",
      palette: "",
      venue: "",
      date: "",
      notes: ""
    });

    setConcept(null);
  };

  return (
    <section className="vision-section" id="event-vision">
      <div className="vision-glow vision-glow-one" />
      <div className="vision-glow vision-glow-two" />

      <div className="container">
        <motion.div
          className="vision-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">
            EVENTSPHERE EXPERIENCE STUDIO
          </span>

          <h2>
            Imagine It.
            <br />
            <em>We Design It.</em>
          </h2>

          <p>
            Tell us what you are imagining and create your first
            EventSphere event concept in seconds.
          </p>
        </motion.div>

        <div className="vision-layout">
          {/* FORM */}
          <motion.div
            className="vision-form-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="vision-card-top">
              <div>
                <span className="vision-label">
                  EVENT DESIGNER
                </span>

                <h3>Build Your Event</h3>
              </div>

              <div className="vision-progress">
                <span>{progress}%</span>
                <small>ready</small>
              </div>
            </div>

            <div className="progress-line">
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="vision-field">
              <label>
                <CalendarDays size={15} />
                What are you planning?
              </label>

              <div className="option-grid">
                {eventTypes.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      form.eventType === item
                        ? "vision-option selected"
                        : "vision-option"
                    }
                    onClick={() => update("eventType", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="vision-row">
              <div className="vision-field">
                <label>
                  <Users size={15} />
                  Number of guests
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 150"
                  value={form.guests}
                  onChange={(e) =>
                    update("guests", e.target.value)
                  }
                />
              </div>

              <div className="vision-field">
                <label>
                  <CalendarDays size={15} />
                  Event date
                </label>

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    update("date", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="vision-field">
              <label>
                <Sparkles size={15} />
                What style do you imagine?
              </label>

              <div className="option-grid two">
                {styles.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      form.style === item
                        ? "vision-option selected"
                        : "vision-option"
                    }
                    onClick={() => update("style", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="vision-row">
              <div className="vision-field">
                <label>
                  <Palette size={15} />
                  Colour palette
                </label>

                <select
                  value={form.palette}
                  onChange={(e) =>
                    update("palette", e.target.value)
                  }
                >
                  <option value="">Choose palette</option>

                  {palettes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="vision-field">
                <label>
                  <MapPin size={15} />
                  Venue
                </label>

                <select
                  value={form.venue}
                  onChange={(e) =>
                    update("venue", e.target.value)
                  }
                >
                  <option value="">Choose venue</option>

                  {venues.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="vision-field">
              <label>
                <WandSparkles size={15} />
                Tell us anything else
              </label>

              <textarea
                rows="4"
                placeholder="Describe your dream event, décor ideas, special requirements..."
                value={form.notes}
                onChange={(e) =>
                  update("notes", e.target.value)
                }
              />
            </div>

            <div className="vision-actions">
              <button
                type="button"
                className="vision-generate"
                onClick={generateConcept}
                disabled={
                  loading ||
                  !form.eventType ||
                  !form.guests ||
                  !form.style
                }
              >
                {loading ? (
                  <>
                    <span className="vision-spinner" />
                    Creating your concept...
                  </>
                ) : (
                  <>
                    <Sparkles size={17} />
                    Create My Event Concept
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              {concept && (
                <button
                  type="button"
                  className="vision-reset"
                  onClick={resetPlanner}
                >
                  <RotateCcw size={14} />
                  Start Again
                </button>
              )}
            </div>

            <p className="vision-security">
              ✦ Your event preferences are used only to create
              your EventSphere concept.
            </p>
          </motion.div>

          {/* RESULT */}
          <div className="vision-result">
            <AnimatePresence mode="wait">
              {!concept ? (
                <motion.div
                  key="empty"
                  className="vision-empty"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <div className="vision-orbit">
                    <div className="vision-orbit-ring" />
                    <div className="vision-orbit-core">
                      <Sparkles size={34} />
                    </div>
                  </div>

                  <span>YOUR EVENT CONCEPT</span>

                  <h3>
                    Your vision
                    <br />
                    starts here.
                  </h3>

                  <p>
                    Complete the planner and we'll transform
                    your ideas into a polished event concept.
                  </p>

                  <div className="empty-points">
                    <span>
                      <CheckCircle2 size={14} />
                      Style direction
                    </span>

                    <span>
                      <CheckCircle2 size={14} />
                      Guest experience
                    </span>

                    <span>
                      <CheckCircle2 size={14} />
                      Décor concept
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  className="vision-result-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="result-badge">
                    <Sparkles size={13} />
                    EVENTSPHERE CONCEPT
                  </div>

                  <h3>{concept.title}</h3>

{concept.image && (
  <div className="result-image-wrap">
    <img
      src={concept.image}
      alt="AI generated event concept"
      className="result-image"
    />
  </div>
)}

<p className="result-description">
  {concept.description}
</p>

                  <div className="result-grid">
                    {concept.details.map((detail) => (
                      <div
                        className="result-detail"
                        key={detail.title}
                      >
                        <span>{detail.title}</span>
                        <p>{detail.text}</p>
                      </div>
                    ))}
                  </div>

                  {form.notes && (
                    <div className="client-vision">
                      <small>YOUR VISION</small>
                      <p>“{form.notes}”</p>
                    </div>
                  )}

                  <div className="result-footer">
                    <span>
                      Ready to make this real?
                    </span>

                    <a href="#contact">
                      Talk to EventSphere
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
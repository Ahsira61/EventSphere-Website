import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Headphones,
  Lightbulb,
  ClipboardList,
  Rocket,
  Sparkles,
  Target,
  Eye
} from "lucide-react";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import corporate from "../assets/corporate.jpg";
import logo from "../assets/logo.png";

const steps = [
  [
    Headphones,
    "01",
    "Understand",
    "We listen to your ideas and understand exactly what your event needs."
  ],
  [
    Lightbulb,
    "02",
    "Create",
    "We develop creative concepts that reflect your vision and personality."
  ],
  [
    ClipboardList,
    "03",
    "Plan",
    "We organize every detail carefully so everything feels effortless."
  ],
  [
    Rocket,
    "04",
    "Execute",
    "We professionally manage your event from planning to final moments."
  ]
];

export default function About() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="page-hero about-hero">
        <div className="container page-hero-inner">
          <Reveal className="about-hero-copy">
            <span className="eyebrow">ABOUT EVENTSPHERE</span>

            <h1>
              We Create Experiences,
              <br />
              <em>Not Just Events.</em>
            </h1>

            <p>
              Creative thinking, careful planning and professional execution —
              brought together under one premium event brand.
            </p>

            <div className="about-hero-tags">
              <span>Weddings</span>
              <span>Corporate</span>
              <span>Celebrations</span>
            </div>
          </Reveal>

          <Reveal className="about-hero-visual" delay={0.15}>
            <div className="event-orbit orbit-one"></div>
            <div className="event-orbit orbit-two"></div>
            <div className="event-orbit orbit-three"></div>

            <div className="event-glow"></div>

            <div className="floating-word word-one">MOMENTS</div>
            <div className="floating-word word-two">STORIES</div>
            <div className="floating-word word-three">EXPERIENCES</div>

            <div className="hero-logo-core">
              <div className="logo-aura"></div>
              <img src={logo} alt="EventSphere" />
              <Sparkles className="hero-sparkle" size={20} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="section">
        <div className="container split about-split">
          <Reveal>
            <div className="about-image-wrap">
              <img
                className="rounded-photo"
                src={corporate}
                alt="EventSphere professional event"
              />
              <div className="image-badge">
                <span>EVENTSPHERE</span>
                <strong>EST. 2025</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="eyebrow">OUR STORY</span>

            <h2>
              Creating memorable
              <br />
              experiences with <span>purpose.</span>
            </h2>

            <p>
              EventSphere is a professional event management brand dedicated
              to planning and creating memorable experiences. We bring
              together creative ideas, careful planning, and professional
              execution to make every event special.
            </p>

            <p>
              From weddings and private celebrations to corporate events and
              conferences, we work closely with our clients to understand
              their vision and turn it into a successful event.
            </p>

            <div className="story-stat-row">
              <div>
                <strong>01</strong>
                <span>Creative Vision</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Detailed Planning</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Perfect Execution</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-intro">
            <Reveal>
              <span className="eyebrow">WHAT DRIVES US</span>
              <h2>
                Built around
                <br />
                <em>purpose & creativity.</em>
              </h2>
            </Reveal>
          </div>

          <div className="vision-grid">
            {/* ================= VISION (RED CHAMPAGNE THEME) ================= */}
            <Reveal className="vision-card vision-card-red">
              <div className="vision-orbit-system">
                <span className="vision-orbit orbit-a"></span>
                <span className="vision-orbit orbit-b"></span>
                <span className="vision-orbit orbit-c"></span>
                {/* Floating Rose Petals Animation */}
                <div className="petal petal-1"></div>
                <div className="petal petal-2"></div>
              </div>

              <div className="vision-card-inner">
                <div className="vision-card-top">
                  <span className="vision-number">01</span>
                  <div className="vision-icon">
                    <Eye size={22} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="vision-card-content">
                  <span className="small-label">OUR VISION</span>
                  <h3>
                    Experiences
                    <br />
                    <span>worth remembering.</span>
                  </h3>
                  <p>
                    To become a trusted and creative event management brand
                    known for exceptional experiences, thoughtful details,
                    and celebrations that stay with people long after the
                    event ends.
                  </p>
                </div>

                <div className="vision-card-footer">
                  <span className="vision-footer-line"></span>
                  <span>IMAGINE · INSPIRE · REMEMBER</span>
                </div>
              </div>
            </Reveal>

            {/* ================= MISSION (CREAM THEME) ================= */}
            <Reveal className="vision-card vision-card-cream" delay={0.12}>
              <div className="vision-orbit-system">
                <span className="vision-orbit orbit-a"></span>
                <span className="vision-orbit orbit-b"></span>
                <span className="vision-orbit orbit-c"></span>
                {/* Floating White/Cream Petals Animation */}
                <div className="petal petal-white-1"></div>
                <div className="petal petal-white-2"></div>
              </div>

              <div className="vision-card-inner">
                <div className="vision-card-top">
                  <span className="vision-number">02</span>
                  <div className="vision-icon">
                    <Target size={22} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="vision-card-content">
                  <span className="small-label">OUR MISSION</span>
                  <h3>
                    Your vision,
                    <br />
                    <span>beautifully executed.</span>
                  </h3>
                  <p>
                    To transform every client's ideas into well-planned,
                    creative, and professionally executed events through
                    careful planning, meaningful design, and dependable
                    service.
                  </p>
                </div>

                <div className="vision-card-footer">
                  <span className="vision-footer-line"></span>
                  <span>PLAN · CREATE · DELIVER</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            light
            eyebrow="HOW WE WORK"
            title="Our Approach"
            text="Four clear stages keep every event focused, transparent and beautifully executed."
          />

          <div className="steps-grid">
            {steps.map(([Icon, number, title, text], i) => (
              <Reveal className="step-card" delay={i * 0.08} key={title}>
                <div className="step-top">
                  <span className="step-number">{number}</span>
                  <Icon className="step-icon" size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="step-line"></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIFFERENCE ================= */}
      <section className="section about-final">
        <div className="container centered">
          <SectionHeading
            eyebrow="THE DIFFERENCE"
            title="Why EventSphere?"
            text="Creativity • Professionalism • Attention to Detail • Reliable Service"
          />

          <Link className="gold-btn" to="/portfolio#contact">
            Let's Create Something Memorable
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
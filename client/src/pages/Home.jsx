import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Lightbulb,
  Sparkles,
  CheckCircle2,
  WandSparkles,
  Users,
  Gem,
  PartyPopper,
  Building2,
  ClipboardCheck
} from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import EventVisionStudio from "../components/EventVisionStudio";

import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";
import wedding from "../assets/wedding.jpg";
import corporate from "../assets/corporate.jpg";
import conference from "../assets/conference.jpg";
import privateImg from "../assets/private.jpg";
import theme from "../assets/theme.jpg";
import exhibition from "../assets/exhibition.jpg";

const services = [
  {
    name: "Weddings",
    number: "01",
    desc: "Beautifully planned celebrations tailored around your story, style and vision.",
    image: wedding,
    icon: Gem
  },
  {
    name: "Corporate Events",
    number: "02",
    desc: "Polished experiences designed to create impact, connection and lasting impressions.",
    image: corporate,
    icon: Building2
  },
  {
    name: "Conferences & Seminars",
    number: "03",
    desc: "Professional coordination for meaningful business gatherings and experiences.",
    image: conference,
    icon: Users
  },
  {
    name: "Private Parties",
    number: "04",
    desc: "Personal celebrations designed around the people and moments that matter.",
    image: privateImg,
    icon: PartyPopper
  },
  {
    name: "Exhibitions & Launches",
    number: "05",
    desc: "Creative concepts that help brands make their most important moments stand out.",
    image: exhibition,
    icon: Sparkles
  },
  {
    name: "Theme Events",
    number: "06",
    desc: "Immersive décor, styling and concepts built around your imagination.",
    image: theme,
    icon: WandSparkles
  }
];

const whyChooseUs = [
  [
    Lightbulb,
    "Creative Ideas",
    "Unique concepts designed around your vision."
  ],
  [
    CalendarDays,
    "Professional Planning",
    "Every detail is carefully planned and organized."
  ],
  [
    CheckCircle2,
    "Smooth Execution",
    "We manage your event from planning to completion."
  ],
  [
    Sparkles,
    "Memorable Experiences",
    "Creating moments your guests will remember."
  ]
];

const introHighlights = [
  {
    number: "01",
    title: "Creative Planning",
    text: "Ideas shaped around your story.",
    icon: Lightbulb
  },
  {
    number: "02",
    title: "Flawless Execution",
    text: "Every detail handled with care.",
    icon: ClipboardCheck
  },
  {
    number: "03",
    title: "Memorable Moments",
    text: "Experiences worth remembering.",
    icon: Sparkles
  }
];

export default function Home() {
  const createEventConcept = () => {
    const type = document.getElementById("eventType")?.value;
    const guests = document.getElementById("guestCount")?.value;
    const style = document.getElementById("eventStyle")?.value;
    const budget = document.getElementById("eventBudget")?.value;

    const result = document.getElementById("experience-result");

    if (!result) return;

    result.innerHTML = `
      <div class="result-placeholder result-created">
        <div class="result-circle">✦</div>

        <span class="eyebrow">YOUR EVENT CONCEPT</span>

        <h3>${style} ${type}</h3>

        <p>
          We envision a beautifully curated
          ${type.toLowerCase()} experience for
          ${guests.toLowerCase()}, featuring a
          ${style.toLowerCase()} atmosphere with a
          planned budget of ${budget}.
        </p>

        <div class="result-tags">
          <span>${type}</span>
          <span>${guests}</span>
          <span>${style}</span>
          <span>${budget}</span>
        </div>

        <div class="concept-features">
          <span>✦ Elegant Styling</span>
          <span>✦ Guest Experience</span>
          <span>✦ Professional Coordination</span>
        </div>

        <a
          href="/portfolio#contact"
          class="result-link"
        >
          Turn This Into Reality ↗
        </a>
      </div>
    `;

    result.classList.remove("result-hidden");

    void result.offsetWidth;

    result.classList.add("result-visible");
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hero">
        <img
          className="hero-bg-image"
          src={hero}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero-overlay" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">

          <motion.div
            className="hero-logo-wrap"
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -8
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="hero-logo-ring">
              <img
                src={logo}
                alt="EventSphere logo"
                className="hero-logo"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -45
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >

            <span className="hero-kicker">
              EVENTSPHERE
            </span>

            <h1>
              Crafting Moments,
              <br />
              <em>Creating Memories.</em>
            </h1>

            <p>
              We Plan. You Celebrate.
              <strong> We Make It Unforgettable.</strong>
            </p>

            <div className="hero-actions">

              <Link
                className="gold-btn"
                to="/portfolio#contact"
              >
                Plan Your Event
                <ArrowUpRight size={18} />
              </Link>

              <Link
                className="outline-btn"
                to="/services"
              >
                Explore Our Services
              </Link>

            </div>

          </motion.div>

        </div>

        <motion.a
          className="scroll-cue"
          href="#intro"
          aria-label="Scroll to introduction"
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <ArrowDown />
        </motion.a>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section
        id="intro"
        className="section cream intro-section"
      >

        <div className="container split">

          <Reveal>

            <span className="eyebrow">
              THE EVENTSPHERE EXPERIENCE
            </span>

            <h2>
              Turning Ideas Into
              <br />
              <em>Extraordinary Experiences</em>
            </h2>

            <p className="lead">
              At EventSphere, we plan and manage events
              with creativity, care and attention to detail.
              From intimate celebrations to large corporate
              events, we turn your ideas into memorable
              experiences.
            </p>

            {/* INTERACTIVE PROCESS HIGHLIGHTS */}
            <div className="intro-highlights">

              {introHighlights.map(
                ({ number, title, text, icon: Icon }, index) => (
                  <motion.div
                    className="intro-highlight"
                    key={title}
                    initial={{
                      opacity: 0,
                      y: 24
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                      y: -7,
                      transition: {
                        duration: 0.25
                      }
                    }}
                  >

                    <div className="intro-highlight-icon">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div className="intro-highlight-number">
                      {number}
                    </div>

                    <div className="intro-highlight-copy">
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>

                    <ArrowUpRight
                      className="intro-highlight-arrow"
                      size={17}
                    />

                  </motion.div>
                )
              )}

            </div>

            <Link
              className="text-link"
              to="/about"
            >
              Discover EventSphere
              <ArrowUpRight size={18} />
            </Link>

          </Reveal>


          <Reveal
            className="intro-card"
            delay={0.15}
          >

            <div className="image-frame">

              <img
                className="intro-image"
                src={corporate}
                alt="Elegant EventSphere event"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />

              <div className="image-shine" />

              {/* Intentionally no text overlay here.
                  This keeps the event photograph clean. */}

            </div>

            <div className="floating-stat">

              <span>500+</span>

              <small>
                Successful Events
              </small>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="section services-section">

        <div className="container">

          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Our Services"
            text="From intimate celebrations to professional corporate events, we bring creativity, planning and seamless execution together."
          />

          <div className="service-grid">

            {services.map((service, i) => {

              const Icon = service.icon;

              return (
                <Reveal
                  key={service.name}
                  className="service-card"
                  delay={i * 0.06}
                >

                  <Link to="/services">

                    <div className="service-image">

                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="service-image-overlay" />

                      <span className="service-number">
                        {service.number}
                      </span>

                      <div className="service-icon">
                        <Icon size={19} />
                      </div>

                      <div className="service-arrow">
                        <ArrowUpRight size={20} />
                      </div>

                    </div>

                    <div className="service-copy">

                      <h3>
                        {service.name}
                      </h3>

                      <p>
                        {service.desc}
                      </p>

                      <div className="service-link">
                        Explore Service
                        <ArrowUpRight size={15} />
                      </div>

                    </div>

                  </Link>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="section dark-section why-section">

        <div className="container">

          <SectionHeading
            light
            eyebrow="THE EVENTSPHERE STANDARD"
            title="Why Choose Us?"
            text="The details matter. Our process combines imagination with disciplined execution."
          />

          <div className="why-grid">

            {whyChooseUs.map(
              ([Icon, title, text], i) => (

                <Reveal
                  className="why-card"
                  delay={i * 0.08}
                  key={title}
                >

                  <Icon />

                  <span>
                    0{i + 1}
                  </span>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <div className="why-line" />

                </Reveal>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED EVENTS
      ===================================================== */}
      <section className="section cream featured-section">

        <div className="container">

          <SectionHeading
            eyebrow="MOMENTS WE CREATE"
            title="Featured Events"
            text="A glimpse into the atmosphere, energy and detail we bring to every occasion."
          />

          <div className="mosaic">

            <Reveal className="mosaic-item large">

              <img
                src={wedding}
                alt="Elegant wedding event"
                loading="lazy"
                decoding="async"
              />

              <div className="mosaic-overlay" />

              <div className="mosaic-content">
                <small>01 / SIGNATURE EVENTS</small>
                <span>Weddings</span>
              </div>

            </Reveal>


            <Reveal className="mosaic-item">

              <img
                src={conference}
                alt="Corporate conference"
                loading="lazy"
                decoding="async"
              />

              <div className="mosaic-overlay" />

              <div className="mosaic-content">
                <small>02 / PROFESSIONAL</small>
                <span>Corporate</span>
              </div>

            </Reveal>


            <Reveal className="mosaic-item">

              <img
                src={privateImg}
                alt="Private celebration"
                loading="lazy"
                decoding="async"
              />

              <div className="mosaic-overlay" />

              <div className="mosaic-content">
                <small>03 / CELEBRATIONS</small>
                <span>Private Celebrations</span>
              </div>

            </Reveal>


            <Reveal className="mosaic-item wide">

              <img
                src={theme}
                alt="Creative theme event"
                loading="lazy"
                decoding="async"
              />

              <div className="mosaic-overlay" />

              <div className="mosaic-content">
                <small>04 / CREATIVE EXPERIENCES</small>
                <span>Special Events</span>
              </div>

            </Reveal>

          </div>

        </div>

      </section>

      <EventVisionStudio />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="cta-section">

        <div className="cta-orbit orbit-one" />
        <div className="cta-orbit orbit-two" />

        <div className="container cta-inner">

          <Reveal>

            <span className="eyebrow">
              LET'S CREATE
            </span>

            <h2>
              Your Vision.
              <br />
              Our Expertise.
              <br />
              <em>
                One Unforgettable Event.
              </em>
            </h2>

            <p>
              Let EventSphere turn your next occasion
              into an experience worth remembering.
            </p>

            <Link
              className="gold-btn"
              to="/portfolio#contact"
            >
              Let's Plan Your Event
              <ArrowUpRight size={18} />
            </Link>

          </Reveal>

        </div>

      </section>

    </>
  );
}
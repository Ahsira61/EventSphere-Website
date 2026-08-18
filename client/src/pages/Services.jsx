import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Gem,
  Building2,
  Users,
  PartyPopper,
  WandSparkles,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import wedding from "../assets/wedding.jpg";
import corporate from "../assets/corporate.jpg";
import conference from "../assets/conference.jpg";
import privateImg from "../assets/private.jpg";
import exhibition from "../assets/exhibition.jpg";
import design from "../assets/design.jpg";
import theme from "../assets/theme.jpg";

const services = [
  {
    number: "01",
    title: "Weddings",
    eyebrow: "SIGNATURE CELEBRATIONS",
    tagline: "Beautifully planned. Perfectly celebrated.",
    description:
      "From intimate ceremonies to grand receptions, we shape every detail around your story, style and vision.",
    image: wedding,
    icon: Gem,
  },
  {
    number: "02",
    title: "Corporate Events",
    eyebrow: "PROFESSIONAL EXPERIENCES",
    tagline: "Professional events. Powerful experiences.",
    description:
      "Polished corporate gatherings, award nights and brand experiences designed to create impact and connection.",
    image: corporate,
    icon: Building2,
  },
  {
    number: "03",
    title: "Conferences & Seminars",
    eyebrow: "BUSINESS GATHERINGS",
    tagline: "Connect. Inspire. Engage.",
    description:
      "Thoughtfully coordinated conferences, seminars and workshops where every detail works seamlessly together.",
    image: conference,
    icon: Users,
  },
  {
    number: "04",
    title: "Private Celebrations",
    eyebrow: "PERSONAL MOMENTS",
    tagline: "Your celebration. Your way.",
    description:
      "Birthdays, anniversaries, engagements and private gatherings designed around the people and moments that matter.",
    image: privateImg,
    icon: PartyPopper,
  },
  {
    number: "05",
    title: "Exhibitions & Launches",
    eyebrow: "BRAND EXPERIENCES",
    tagline: "Make your moment stand out.",
    description:
      "Creative concepts and professional execution that help brands make their most important moments unforgettable.",
    image: exhibition,
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Theme Events",
    eyebrow: "IMMERSIVE EXPERIENCES",
    tagline: "Bring your vision to life.",
    description:
      "Unique themes, creative décor and immersive environments built around your imagination.",
    image: theme,
    icon: WandSparkles,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We listen to your ideas, priorities and vision.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Design",
    text: "We turn your vision into a refined event concept.",
    icon: Gem,
  },
  {
    number: "03",
    title: "Plan",
    text: "Every vendor, detail and timeline is carefully organized.",
    icon: CalendarDays,
  },
  {
    number: "04",
    title: "Celebrate",
    text: "You enjoy the moment while we handle everything.",
    icon: CheckCircle2,
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-glow glow-red" />
        <div className="services-hero-glow glow-gold" />

        <div className="services-hero-grid container">

          {/* LEFT CONTENT */}
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="services-hero-eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span />
              OUR SERVICES
            </motion.div>

            <h1>
              We Plan.
              <br />
              <em>You Celebrate.</em>
            </h1>

            <p className="services-hero-description">
              From intimate celebrations to sophisticated corporate
              experiences, EventSphere transforms your ideas into
              beautifully executed moments.
            </p>

            <div className="services-hero-actions">

              <Link
                to="/portfolio#contact"
                className="services-primary-btn"
              >
                Plan Your Event
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="#services-list"
                className="services-scroll-link"
              >
                Explore Services
                <span className="scroll-line" />
              </a>

            </div>

            <div className="services-hero-meta">
              <div>
                <strong>06</strong>
                <span>Signature Services</span>
              </div>

              <div className="meta-divider" />

              <div>
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>
            </div>

          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            className="services-hero-visual"
            initial={{
              opacity: 0,
              scale: 0.78,
              rotate: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.25,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="hero-orbit orbit-red" />
            <div className="hero-orbit orbit-gold" />

            <motion.div
              className="hero-image-circle"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={design}
                alt="Elegant EventSphere dinner event"
              />

              <div className="hero-image-overlay" />
            </motion.div>


            {/* FLOATING BADGE */}
            <motion.div
              className="floating-service-badge badge-one"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                type: "spring",
              }}
            >
              <Sparkles size={15} />
              <div>
                <span>CURATED</span>
                <strong>WITH CARE</strong>
              </div>
            </motion.div>


            <motion.div
              className="floating-service-badge badge-two"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.05,
                duration: 0.7,
              }}
            >
              <span>EVENTSPHERE</span>
              <strong>EST. 2026</strong>
            </motion.div>


            <div className="hero-image-caption">
              <span>THE ART OF</span>
              <strong>CELEBRATION</strong>
            </div>

          </motion.div>

        </div>


        <motion.div
          className="services-hero-scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span>SCROLL TO DISCOVER</span>
          <div />
        </motion.div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="container">

          <motion.div
            className="services-intro-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >

            <div className="luxury-eyebrow">
              <span>01</span>
              WHAT WE CREATE
            </div>

            <h2>
              Every event deserves
              <br />
              <em>its own story.</em>
            </h2>

            <p>
              We don't simply organize events. We create atmospheres,
              experiences and memories that stay long after the last
              guest leaves.
            </p>

          </motion.div>


          <div className="services-process">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="process-item"
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div className="process-top">
                    <span>{item.number}</span>
                    <Icon size={20} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="process-line">
                    <span />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services-list"
        className="services-showcase"
      >

        <div className="container">

          <motion.div
            className="showcase-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="luxury-eyebrow light">
              <span>02</span>
              THE EVENTSPHERE COLLECTION
            </div>

            <h2>
              Designed for
              <br />
              <em>every occasion.</em>
            </h2>

          </motion.div>


          <div className="services-cards">

            {services.map((service, index) => {

              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  className={`service-feature ${reverse ? "reverse" : ""}`}
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  variants={reveal}
                >

                  {/* IMAGE */}
                  <div className="service-feature-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />

                    <div className="feature-image-dark" />

                    <div className="service-number">
                      {service.number}
                    </div>

                    <div className="service-icon-circle">
                      <Icon size={20} />
                    </div>

                    <div className="image-corner corner-top" />
                    <div className="image-corner corner-bottom" />

                  </div>


                  {/* CONTENT */}
                  <div className="service-feature-content">

                    <span className="service-small-label">
                      {service.eyebrow}
                    </span>

                    <h3>{service.title}</h3>

                    <div className="service-feature-line" />

                    <h4>{service.tagline}</h4>

                    <p>{service.description}</p>

                    <Link
                      to="/portfolio#contact"
                      className="service-explore"
                    >
                      <span>PLAN THIS EXPERIENCE</span>
                      <ArrowUpRight size={18} />
                    </Link>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          LUXURY STATEMENT
      ===================================================== */}

      <section className="services-statement">

        <div className="statement-orbit statement-orbit-one" />
        <div className="statement-orbit statement-orbit-two" />

        <div className="container">

          <motion.div
            className="statement-content"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
          >

            <span className="statement-star">✦</span>

            <span className="luxury-eyebrow light">
              THE EVENTSPHERE PROMISE
            </span>

            <h2>
              Beautiful details.
              <br />
              <em>Effortless moments.</em>
            </h2>

            <p>
              From the first idea to the final guest departure,
              every element is thoughtfully considered.
            </p>

            <div className="statement-signature">
              <span>EVENTSPHERE</span>
              <div />
              <small>WE PLAN. YOU CELEBRATE.</small>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="services-final-cta">

        <div className="cta-decoration cta-left" />
        <div className="cta-decoration cta-right" />

        <div className="container">

          <motion.div
            className="final-cta-content"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="luxury-eyebrow">
              <span>03</span>
              LET'S CREATE
            </div>

            <h2>
              Your vision.
              <br />
              <em>Our expertise.</em>
            </h2>

            <p>
              Tell us what you're imagining.
              We'll take care of the rest.
            </p>

            <Link
              to="/portfolio#contact"
              className="services-primary-btn large"
            >
              Start Planning
              <ArrowUpRight size={19} />
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}
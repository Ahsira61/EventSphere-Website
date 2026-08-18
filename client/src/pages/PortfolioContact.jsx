import { ArrowUpRight, Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import InquiryForm from "../components/InquiryForm";
import wedding from "../assets/wedding.jpg";
import corporate from "../assets/corporate.jpg";
import conference from "../assets/conference.jpg";
import privateImg from "../assets/private.jpg";
import theme from "../assets/theme.jpg";
import exhibition from "../assets/exhibition.jpg";

const gallery = [
  [wedding,"Weddings","Elegant celebrations designed around your story."],
  [corporate,"Corporate Events","Professional experiences that bring people together."],
  [conference,"Conferences & Seminars","Well-organized events built for connection."],
  [privateImg,"Private Celebrations","Personalized moments made memorable."],
  [theme,"Theme Events","Atmospheres built around your imagination."],
  [exhibition,"Exhibitions & Launches","Brand moments designed to stand out."]
];

export default function PortfolioContact() {
  return (
    <>
      <section className="page-hero dark-section">
        <div className="container page-hero-inner">
          <Reveal><span className="eyebrow">PORTFOLIO</span><h1>Moments We've<br/><em>Helped Create.</em></h1><p>Explore our event experiences, creative work, and the moments that make EventSphere special.</p></Reveal>
          <Reveal className="hero-mini-card" delay={.12}><img src={theme} alt="EventSphere celebration"/></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="OUR WORK" title="Event Experiences" text="A curated visual collection from weddings, corporate experiences, conferences and celebrations."/>
          <div className="gallery-grid">
            {gallery.map(([img,title,text],i)=>(
              <motion.figure className={`gallery-card g${i+1}`} key={title}
                initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.65,delay:i*.05}}>
                <img src={img} alt={title}/>
                <figcaption><span>{title}</span><small>{text}</small></figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <SectionHeading eyebrow="CLIENT WORDS" title="What Our Clients Say"/>
          <div className="testimonials">
            <Reveal className="quote-card"><span>“</span><p>Professional, creative, and attentive to every detail. EventSphere made our event truly memorable.</p><strong>— Happy Client</strong></Reveal>
            <Reveal className="quote-card" delay={.12}><span>“</span><p>From planning to execution, everything was handled smoothly and professionally.</p><strong>— Corporate Client</strong></Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <Reveal>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Let's Create Something <em>Memorable.</em></h2>
            <p>Have an event in mind? Tell us about it and our team can start shaping the experience with you.</p>
            <div className="contact-details">
              <a href="tel:+923331263387"><Phone/>+92 333 1263387</a>
              <a href="mailto:EventSphere@gmail.com"><Mail/>EventSphere@gmail.com</a>
              <span><MapPin/>Gulshan-e-Iqbal, Karachi, Pakistan</span>
            </div>
            <div className="contact-socials"><a href="#"><Instagram/></a><a href="#"><Facebook/></a><a href="#"><Linkedin/></a></div>
          </Reveal>
          <Reveal className="form-card" delay={.12}><InquiryForm/></Reveal>
        </div>
      </section>
    </>
  );
}

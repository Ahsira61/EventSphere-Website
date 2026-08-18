import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <div className="footer-logo">ES <span>EventSphere</span></div>
          <p>Crafting Moments, Creating Memories.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="#" aria-label="YouTube"><Youtube size={18}/></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio & Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a className="contact-line" href="tel:+923331263387"><Phone size={17}/> +92 333 1263387</a>
          <a className="contact-line" href="mailto:EventSphere@gmail.com"><Mail size={17}/> EventSphere@gmail.com</a>
          <span className="contact-line"><MapPin size={17}/> Gulshan-e-Iqbal, Karachi</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 EventSphere. All Rights Reserved.</span>
          <span>Designed for memorable experiences.</span>
        </div>
      </div>
    </footer>
  );
}

import Reveal from "../components/Reveal";

export default function Privacy() {
  return (
    <section className="section cream privacy-page">
      <div className="container narrow">
        <Reveal>
          <span className="eyebrow">PRIVACY</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: August 2026</p>
          <h2>Information we collect</h2>
          <p>When you submit an event inquiry, we collect the information you choose to provide, such as your name, email address, phone number, event details and message.</p>
          <h2>How we use information</h2>
          <p>We use inquiry information only to respond to your request, understand your event requirements and provide relevant event-management assistance.</p>
          <h2>Data protection</h2>
          <p>The website uses server-side validation, rate limiting and security headers. Access to stored inquiries should be restricted to authorized staff. Do not submit passwords, payment-card details or other highly sensitive information through the inquiry form.</p>
          <h2>Third-party services</h2>
          <p>The site may use external services for fonts, hosting, analytics or social links. Their own privacy policies may apply when you interact with those services.</p>
          <h2>Your choices</h2>
          <p>You may contact EventSphere to ask what inquiry information is retained and request correction or deletion where applicable.</p>
          <h2>Contact</h2>
          <p>Email: EventSphere@gmail.com · Phone: +92 333 1263387</p>
        </Reveal>
      </div>
    </section>
  );
}

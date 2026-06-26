import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import "./Contact.css";

const SOCIALS = [
  { label: "LinkedIn", handle: "@zoho", href: "https://www.linkedin.com/company/zoho" },
  { label: "X (Twitter)", handle: "@zoho", href: "https://x.com/zoho" },
  { label: "Facebook", handle: "/zoho", href: "https://www.facebook.com/zoho" },
  { label: "YouTube", handle: "/zoho", href: "https://www.youtube.com/zoho" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="§ Contact"
        title="Let's talk about your business."
        description="Reach out about products, partnerships, careers, or press — our team typically responds within one business day."
      />

      <section className="section">
        <div className="container contact-grid">
          {/* ---------------- CONTACT FORM ---------------- */}
          <Reveal className="contact-form-wrap">
            <span className="section-eyebrow">§ 01 / Send a Message</span>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--sp-3)" }}>Get in touch</h2>

            {status === "sent" ? (
              <div className="contact-success" role="status">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3>Message sent</h3>
                  <p>Thanks for reaching out — our team will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="company">Company (optional)</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us a bit about what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
                {status === "error" && (
                  <p style={{ color: "var(--color-red, #c8202f)", marginTop: "var(--sp-2)", fontSize: "0.9rem" }}>
                    ⚠ {errorMsg}
                  </p>
                )}
              </form>
            )}
          </Reveal>

          {/* ---------------- HQ INFO + SOCIALS ---------------- */}
          <Reveal className="contact-side">
            <div className="contact-info-card">
              <span className="section-eyebrow">§ 02 / Headquarters</span>
              <h3>Zoho Corporation</h3>
              <address>
                Estancia IT Park, Plot No. 140 & 151,<br />
                GST Road, Vallancherry Village,<br />
                Chengalpattu District,<br />
                Tamil Nadu 603202, India
              </address>

              <ul className="contact-info-list">
                <li>
                  <span className="contact-info-list__label">General</span>
                  <span>info@zohocorp.com</span>
                </li>
                <li>
                  <span className="contact-info-list__label">Sales</span>
                  <span>sales@zohocorp.com</span>
                </li>
                <li>
                  <span className="contact-info-list__label">Careers</span>
                  <span>careers@zohocorp.com</span>
                </li>
              </ul>
            </div>

            <div className="contact-info-card">
              <span className="section-eyebrow">§ 03 / Follow Along</span>
              <div className="contact-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <span>{s.label}</span>
                    <span className="contact-social-link__handle">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MAP ---------------- */}
      <section className="section map-section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="section-eyebrow">§ 04 / Find Us</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Headquarters location</h2>
          </Reveal>

          <Reveal className="map-frame">
            <iframe
              title="Zoho Corporation Headquarters Map"
              src="https://www.google.com/maps?q=Estancia+IT+Park,+Vallancherry,+Tamil+Nadu&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

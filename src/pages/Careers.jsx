import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { careerPaths, benefits, hiringSteps } from "../data/companyData";
import "./Careers.css";

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="§ Careers"
        title="Build your career without a degree requirement."
        description="Whether you're a recent graduate, a high-school leaver, or an experienced professional, Zoho has a track designed around how you actually learn best."
      />

      {/* ---------------- INTERNSHIPS ---------------- */}
      <section className="section">
        <div className="container internship-grid">
          <Reveal className="internship-grid__text">
            <span className="section-eyebrow">§ 01 / Internships</span>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--sp-3)" }}>
              Zoho University & internships
            </h2>
            <p>
              Zoho University recruits talented students — including those
              who haven't finished a traditional degree — directly into paid,
              full-time training tracks that lead to real engineering roles.
            </p>
            <p>
              Summer and semester internships are also open to college
              students across engineering, design, and business functions,
              with mentorship from senior team members throughout.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "var(--sp-2)" }}>
              Apply for an Internship
            </Link>
          </Reveal>

          <Reveal className="internship-card">
            <span className="internship-card__tag">No tuition fees</span>
            <h3>Zoho University Track</h3>
            <ul>
              <li>Aptitude-based admission, not grade-based</li>
              <li>Paid training from day one</li>
              <li>Direct path to full-time engineering roles</li>
              <li>Open to non-degree-holding candidates</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CAREER PATHS ---------------- */}
      <section className="section career-paths-section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 02 / Career Paths</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Where you could grow</h2>
          </Reveal>

          <Reveal stagger className="career-paths-grid">
            {careerPaths.map((path) => (
              <div key={path.title} className="career-path-card">
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 03 / Employee Benefits</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>What you get, beyond salary</h2>
          </Reveal>

          <Reveal stagger className="benefits-grid">
            {benefits.map((b) => (
              <div key={b} className="benefit-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{b}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- HIRING PROCESS ---------------- */}
      <section className="section hiring-section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="section-eyebrow">§ 04 / Hiring Process</span>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--paper-0)" }}>How hiring works</h2>
          </Reveal>

          <Reveal stagger className="hiring-steps">
            {hiringSteps.map((step, idx) => (
              <div key={step.title} className="hiring-step">
                <span className="hiring-step__index">{String(idx + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="hiring-cta">
            <Link to="/contact" className="btn btn-primary">Browse Open Roles</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

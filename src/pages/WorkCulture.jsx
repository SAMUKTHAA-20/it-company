import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import "./WorkCulture.css";

const CULTURE_PILLARS = [
  {
    title: "Engineering-first",
    text: "Engineers shape product decisions directly — there's no layer of process between a good idea and shipping it.",
  },
  {
    title: "Talent over pedigree",
    text: "Aptitude and curiosity matter more than where you went to school, or whether you went at all.",
  },
  {
    title: "Long tenure, deep trust",
    text: "Many team members have been with Zoho for over a decade, building deep product and customer knowledge over time.",
  },
];

const LEARNING_ITEMS = [
  "Internal mentorship pairing senior engineers with new hires",
  "Cross-team rotations to learn other parts of the suite",
  "Dedicated time for self-directed learning and experimentation",
  "Access to Zoho University coursework for continued upskilling",
];

const BALANCE_ITEMS = [
  { stat: "On-campus", label: "meals, gyms, and wellness facilities" },
  { stat: "Flexible", label: "outcome-focused working hours" },
  { stat: "Generous", label: "parental and family leave policies" },
];

export default function WorkCulture() {
  return (
    <>
      <PageHero
        eyebrow="§ Work Culture"
        title="Built on trust, not surveillance."
        description="Zoho's culture starts from a simple idea: hire thoughtfully, trust your people, and give them the room — and the runway — to do their best work."
      />

      {/* ---------------- CULTURE PILLARS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 01 / Employee Culture</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>How we work together</h2>
          </Reveal>

          <Reveal stagger className="pillars-grid">
            {CULTURE_PILLARS.map((p) => (
              <div key={p.title} className="pillar-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- RURAL DEVELOPMENT ---------------- */}
      <section className="section rural-section">
        <div className="container rural-grid">
          <Reveal className="rural-grid__text">
            <span className="section-eyebrow">§ 02 / Rural Development</span>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--paper-0)", marginBottom: "var(--sp-3)" }}>
              Jobs don't have to move to the city
            </h2>
            <p>
              Zoho operates development centers in small towns like Tenkasi
              and Renigunta in Tamil Nadu, bringing high-skill software
              careers directly to rural communities — instead of asking
              talented people to relocate to major metros.
            </p>
            <p>
              These centers run at full parity with Zoho's flagship Chennai
              campus: the same products, the same responsibility, and the
              same career paths, just closer to home.
            </p>
          </Reveal>

          <Reveal className="rural-grid__stats">
            <div className="rural-stat">
              <span className="rural-stat__num">4+</span>
              <span>Rural development centers across Tamil Nadu</span>
            </div>
            <div className="rural-stat">
              <span className="rural-stat__num">1000s</span>
              <span>Of careers created outside major metro areas</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LEARNING ---------------- */}
      <section className="section">
        <div className="container learning-grid">
          <Reveal className="learning-grid__text">
            <span className="section-eyebrow">§ 03 / Learning Opportunities</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Zoho University & beyond</h2>
            <p className="section-sub" style={{ marginBottom: "var(--sp-3)" }}>
              A tuition-free track that hires capable high-school graduates
              directly into engineering roles, alongside continuous learning
              for every employee.
            </p>
          </Reveal>

          <Reveal stagger className="learning-list">
            {LEARNING_ITEMS.map((item) => (
              <div key={item} className="learning-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- WORK-LIFE BALANCE ---------------- */}
      <section className="section balance-section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 04 / Work-Life Balance</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Built for the long run</h2>
          </Reveal>

          <Reveal stagger className="balance-grid">
            {BALANCE_ITEMS.map((b) => (
              <div key={b.label} className="balance-card">
                <span className="balance-card__stat">{b.stat}</span>
                <p>{b.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Curious what it's like inside?"
        text="Explore open roles and see how Zoho's culture plays out day to day."
        primaryLabel="View Careers"
        primaryTo="/careers"
        secondaryLabel="Our Achievements"
        secondaryTo="/achievements"
      />
    </>
  );
}

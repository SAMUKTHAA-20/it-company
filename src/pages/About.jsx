import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { coreValues, leadership, globalOffices } from "../data/companyData";
import "./About.css";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="§ About Zoho"
        title="A company built to last decades, not quarters."
        description="Zoho Corporation is a privately held, profitable software company building an integrated suite of business applications used by over 100 million people worldwide."
      />

      {/* ---------------- MISSION & VISION ---------------- */}
      <section className="section">
        <div className="container mv-grid">
          <Reveal className="mv-card mv-card--mission">
            <span className="tag">Mission</span>
            <h2>Make great software accessible to every business.</h2>
            <p>
              We build tools that help organizations of every size run their
              operations — sales, finance, support, and beyond — without forcing
              them to choose between affordability and quality.
            </p>
          </Reveal>
          <Reveal className="mv-card mv-card--vision">
            <span className="tag">Vision</span>
            <h2>One integrated suite, built to outlast trends.</h2>
            <p>
              Rather than chasing every new framework or acquisition, we invest
              in a single, coherent technology stack that gets stronger and more
              connected with every product we ship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="section core-values">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 01 / Principles</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Core values</h2>
            <p className="section-sub">
              The decisions behind the product — what we prioritize, and what we
              deliberately choose not to do.
            </p>
          </Reveal>

          <Reveal stagger className="values-grid">
            {coreValues.map((v) => (
              <div key={v.title} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- GLOBAL PRESENCE ---------------- */}
      <section className="section global-presence">
        <div className="container global-grid">
          <Reveal className="global-presence__text">
            <span className="section-eyebrow">§ 02 / Global Presence</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Offices across six regions</h2>
            <p className="section-sub" style={{ marginBottom: "var(--sp-4)" }}>
              Headquartered in Chennai, India, with development and sales offices
              spanning North America, Europe, and Asia Pacific.
            </p>
          </Reveal>

          <Reveal stagger className="offices-grid">
            {globalOffices.map((office) => (
              <div key={office.region} className="office-card">
                <h4>{office.region}</h4>
                <p>{office.cities}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- LEADERSHIP ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 03 / Leadership</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Leadership team</h2>
            <p className="section-sub">
              A small, long-tenured leadership team that has guided the company
              since its earliest years.
            </p>
          </Reveal>

          <Reveal stagger className="leadership-grid">
            {leadership.map((person) => (
              <div key={person.name} className="leader-card">
                <div className="leader-card__avatar" aria-hidden="true">
                  {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3>{person.name}</h3>
                <span className="leader-card__role">{person.role}</span>
                <p>{person.bio}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

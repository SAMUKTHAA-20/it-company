import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Timeline from "../components/Timeline";
import { milestones, growthMetrics } from "../data/companyData";
import "./History.css";

export default function History() {
  return (
    <>
      <PageHero
        eyebrow="§ History"
        title="Three decades, one company, no acquisitions."
        description="From a network-management startup in California to a global suite of fifty-five-plus applications — the story of how Zoho grew on its own terms."
      />

      {/* ---------------- FOUNDING STORY ---------------- */}
      <section className="section">
        <div className="container founding-grid">
          <Reveal className="founding-grid__text">
            <span className="section-eyebrow">§ 01 / The Founding Story</span>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--sp-3)" }}>
              From AdventNet to Zoho
            </h2>
            <p>
              In 1996, Sridhar Vembu and a small team founded AdventNet in
              Pleasanton, California, building network management software
              for internet service providers and enterprises.
            </p>
            <p>
              Rather than raise venture funding, the founders chose to
              bootstrap the company — reinvesting profits into research and
              new products instead of dilution and rapid expansion.
            </p>
            <p>
              That early discipline shaped everything that followed: a
              preference for organic growth, an engineering-first culture, and
              a long memory for decisions that compound over decades rather
              than quarters.
            </p>
          </Reveal>

          <Reveal className="founding-grid__quote">
            <blockquote>
              "We didn't want investors telling us how to run the business.
              We wanted to build something that would still matter in fifty
              years."
            </blockquote>
            <span className="founding-grid__quote-attr">— Company founding philosophy</span>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="section history-timeline">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="section-eyebrow">§ 02 / Milestones</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Key milestones</h2>
            <p className="section-sub">A timeline of the moments that shaped the company.</p>
          </Reveal>

          <Timeline items={milestones} />
        </div>
      </section>

      {/* ---------------- GROWTH JOURNEY ---------------- */}
      <section className="section growth-journey">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 03 / Growth Journey</span>
            <h2 style={{ fontSize: "var(--fs-h2)", color: "var(--paper-0)" }}>
              Three decades of compounding growth
            </h2>
          </Reveal>

          <Reveal stagger className="growth-grid">
            {growthMetrics.map((g) => (
              <div key={g.label} className="growth-card">
                <span className="growth-card__value">{g.value}</span>
                <span className="growth-card__label">{g.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import CTASection from "../components/CTASection";
import { awards } from "../data/companyData";
import "./Achievements.css";

const IMPACT_ITEMS = [
  {
    title: "Privacy-first by design",
    text: "No ad-driven revenue model means customer data is never the product — a stance Zoho has held since its founding.",
  },
  {
    title: "Decentralized employment",
    text: "Rural development centers have brought thousands of high-skill software jobs to small towns across Tamil Nadu.",
  },
  {
    title: "Education without debt",
    text: "Zoho University has graduated thousands of engineers into full-time roles, without tuition fees or student loans.",
  },
];

export default function Achievements() {
  return (
    <>
      <PageHero
        eyebrow="§ Achievements"
        title="Three decades of recognition, without a marketing budget to match."
        description="Awards, certifications, and growth metrics that reflect a product-first approach to building a software company."
      />

      {/* ---------------- BUSINESS GROWTH STATS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 01 / Business Growth</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Growth, measured plainly</h2>
          </Reveal>

          <Reveal stagger className="achievements-stats-grid">
            <StatCounter value={100} suffix="M+" label="Customers worldwide" light />
            <StatCounter value={180} suffix="+" label="Countries with active users" light />
            <StatCounter value={55} suffix="+" label="Products in the suite" light />
            <StatCounter value={30} suffix="+" label="Years profitable, no VC funding" light />
          </Reveal>
        </div>
      </section>

      {/* ---------------- AWARDS ---------------- */}
      <section className="section awards-section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="section-eyebrow">§ 02 / Awards & Recognition</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Recent recognition</h2>
          </Reveal>

          <Reveal stagger className="awards-list">
            {awards.map((a) => (
              <div key={a.title} className="award-row">
                <span className="award-row__year">{a.year}</span>
                <div className="award-row__body">
                  <h3>{a.title}</h3>
                  <span>{a.org}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- GLOBAL IMPACT ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 03 / Global Impact</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Beyond the product</h2>
            <p className="section-sub">
              The metrics that matter to us aren't always the ones in a press release.
            </p>
          </Reveal>

          <Reveal stagger className="impact-grid">
            {IMPACT_ITEMS.map((item) => (
              <div key={item.title} className="impact-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="See how Zoho got here."
        text="Explore the milestones and the people behind three decades of growth."
        primaryLabel="Read Our History"
        primaryTo="/history"
        secondaryLabel="Meet Leadership"
        secondaryTo="/about"
      />
    </>
  );
}

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import { stats } from "../data/companyData";
import { products } from "../data/products";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="container hero__inner">
          <Reveal className="hero__copy">
            <span className="hero__eyebrow">Zoho Corporation · Est. 1996</span>
            <h1 className="hero__title">
              Software that runs the
              <span className="text-red"> world's business.</span>
            </h1>
            <p className="hero__desc">
              An integrated suite of more than fifty-five applications — CRM, finance,
              HR, productivity, and low-code tools — built by one company, on one
              stack, for businesses of every size. Privately held since day one.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn-primary">Explore Products</Link>
              <Link to="/about" className="btn btn-secondary">Learn About Zoho</Link>
            </div>
          </Reveal>

          <Reveal className="hero__panel" aria-hidden="true">
            <div className="hero__window">
              <div className="hero__window-bar">
                <span /><span /><span />
                <span className="hero__window-title">zoho — dashboard</span>
              </div>
              <div className="hero__window-body">
                <div className="hero__metric">
                  <span className="hero__metric-label">Monthly Recurring Revenue</span>
                  <span className="hero__metric-value">$8.42M</span>
                  <span className="hero__metric-delta">▲ 12.4%</span>
                </div>
                <div className="hero__chart" />
                <div className="hero__rows">
                  <div className="hero__row"><span>Zoho CRM</span><span className="hero__bar" style={{ width: "84%" }} /></div>
                  <div className="hero__row"><span>Zoho Books</span><span className="hero__bar" style={{ width: "67%" }} /></div>
                  <div className="hero__row"><span>Zoho Desk</span><span className="hero__bar" style={{ width: "73%" }} /></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="stats-band">
        <div className="container stats-band__grid">
          {stats.map((s) => (
            <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ---------------- FEATURED PRODUCTS ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center" as="div">
            <span className="section-eyebrow">§ 01 / Product Suite</span>
            <h2 className="fs-h2" style={{ fontSize: "var(--fs-h2)" }}>Six products, one philosophy</h2>
            <p className="section-sub">
              Every Zoho application is built in-house, designed to work together
              from the first day you sign up.
            </p>
          </Reveal>

          <Reveal stagger className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Reveal>

          <Reveal className="home__products-footer">
            <Link to="/products" className="btn-ghost">
              View the full suite <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHY ZOHO STRIP ---------------- */}
      <section className="section why-strip">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="section-eyebrow">§ 02 / Why Zoho</span>
            <h2 style={{ fontSize: "var(--fs-h2)" }}>Built differently, on purpose</h2>
          </Reveal>

          <Reveal stagger className="why-grid">
            <div className="why-card">
              <span className="why-card__num">No</span>
              <h3>Venture Capital</h3>
              <p>Self-funded and profitable since founding, which means decisions optimize for decades, not quarterly earnings calls.</p>
            </div>
            <div className="why-card">
              <span className="why-card__num">One</span>
              <h3>Unified Stack</h3>
              <p>Every product is built on the same technology stack in-house, so your tools share data instead of fighting each other.</p>
            </div>
            <div className="why-card">
              <span className="why-card__num">180+</span>
              <h3>Countries Served</h3>
              <p>From single-person startups to global enterprises, Zoho runs in nearly every market and time zone on Earth.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection({
  title = "Ready to run your business on Zoho?",
  text = "Join over 100 million users worldwide already building with the Zoho suite.",
  primaryLabel = "Get Started Free",
  primaryTo = "/contact",
  secondaryLabel = "Explore Products",
  secondaryTo = "/products",
}) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <div className="cta-section__text">
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__sub">{text}</p>
        </div>
        <div className="cta-section__actions">
          <Link to={primaryTo} className="btn btn-primary">{primaryLabel}</Link>
          <Link to={secondaryTo} className="btn btn-on-dark">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}

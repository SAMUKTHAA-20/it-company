import { Link } from "react-router-dom";
import "./Footer.css";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zoho" },
  { label: "X (Twitter)", href: "https://x.com/zoho" },
  { label: "Facebook", href: "https://www.facebook.com/zoho" },
  { label: "YouTube", href: "https://www.youtube.com/zoho" },
];

const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "History", to: "/history" },
      { label: "Achievements", to: "/achievements" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Zoho CRM", to: "/products" },
      { label: "Zoho Mail", to: "/products" },
      { label: "Zoho Books", to: "/products" },
      { label: "Zoho Projects", to: "/products" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Work Culture", to: "/culture" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="navbar__mark">Z</span>
            <span className="footer__brand-name">Zoho</span>
          </Link>
          <p className="footer__tagline">
            A privately held, profitable software company building an integrated
            suite of business applications — without ever raising venture capital.
          </p>
          <div className="footer__social">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading} className="footer__col">
            <h4 className="footer__col-heading">{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>© {year} Zoho Corporation Pvt. Ltd. All rights reserved.</p>
        <p className="footer__bottom-meta">Chennai, India · Austin, USA</p>
      </div>
    </footer>
  );
}

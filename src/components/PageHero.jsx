import "./PageHero.css";

/**
 * PageHero — the compact dark banner used at the top of every
 * sub-page (About, History, Products, etc). Carries the mono
 * "coordinate" eyebrow so each page announces its place in the
 * site, like a heading in a spec document.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <span className="page-hero__eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  );
}

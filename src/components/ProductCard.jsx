import "./ProductCard.css";

export default function ProductCard({ product, expanded = false }) {
  const { name, category, tagline, description, features, color } = product;

  return (
    <article className="product-card" style={{ "--accent": color }}>
      <div className="product-card__top">
        <span className="product-card__mark" aria-hidden="true">
          {name.replace("Zoho ", "").slice(0, 1)}
        </span>
        <span className="tag">{category}</span>
      </div>

      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__tagline">{tagline}</p>
      <p className="product-card__desc">{description}</p>

      {expanded && features?.length > 0 && (
        <ul className="product-card__features">
          {features.map((f) => (
            <li key={f}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

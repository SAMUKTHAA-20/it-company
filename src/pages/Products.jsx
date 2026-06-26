import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import { allProducts } from "../data/products";
import "./Products.css";

const CATEGORIES = ["All", ...new Set(allProducts.map((p) => p.category))];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="§ Products & Services"
        title="One suite. Fifty-five-plus applications."
        description="Every product below is built in-house on a shared technology stack — so your CRM, your books, and your support desk all speak the same language."
      />

      <section className="section">
        <div className="container">
          <Reveal className="products-filter" as="div">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`products-filter__chip ${activeCategory === cat ? "products-filter__chip--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <Reveal stagger className="product-grid product-grid--full" key={activeCategory}>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} expanded />
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        text="Tell us about your business and we'll point you to the right products."
        primaryLabel="Talk to Us"
        primaryTo="/contact"
        secondaryLabel="See Work Culture"
        secondaryTo="/culture"
      />
    </>
  );
}

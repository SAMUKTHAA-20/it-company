import Reveal from "./Reveal";
import "./Timeline.css";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, idx) => (
        <Reveal key={item.year} className="timeline__item">
          <div className="timeline__rail">
            <span className="timeline__dot" />
            {idx !== items.length - 1 && <span className="timeline__line" />}
          </div>
          <div className="timeline__content">
            <span className="timeline__year">{item.year}</span>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__text">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

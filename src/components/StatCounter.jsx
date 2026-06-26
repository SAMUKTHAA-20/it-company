import useCountUp from "../hooks/useCountUp";
import useScrollReveal from "../hooks/useScrollReveal";
import "./StatCounter.css";

export default function StatCounter({ value, suffix = "", label, mono = true, light = false }) {
  const [ref, isVisible] = useScrollReveal();
  const count = useCountUp(value, { startWhen: isVisible });

  return (
    <div ref={ref} className={`stat-counter ${light ? "stat-counter--on-light" : ""}`}>
      <div className={`stat-counter__value ${mono ? "stat-counter__value--mono" : ""}`}>
        {count.toLocaleString()}
        <span className="stat-counter__suffix">{suffix}</span>
      </div>
      <div className="stat-counter__label">{label}</div>
    </div>
  );
}

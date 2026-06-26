import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Reveal — wraps children in a fade/slide-up animation that triggers
 * once the element scrolls into view. Pass `stagger` to animate direct
 * children in sequence (e.g. a row of cards) instead of as one block.
 */
export default function Reveal({ children, as: Tag = "div", stagger = false, className = "", ...rest }) {
  const [ref, isVisible] = useScrollReveal();
  const base = stagger ? "reveal-stagger" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

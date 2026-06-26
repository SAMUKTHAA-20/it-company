import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollToTopOnRouteChange — resets scroll position whenever the
 * route changes, so navigating to a new page doesn't preserve the
 * previous page's scroll offset.
 */
export default function useScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
}

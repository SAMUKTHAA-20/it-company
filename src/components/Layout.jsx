import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import useScrollToTopOnRouteChange from "../hooks/useScrollToTopOnRouteChange";

export default function Layout() {
  useScrollToTopOnRouteChange();

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

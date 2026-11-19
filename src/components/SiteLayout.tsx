import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DocumentHead from "./DocumentHead";
import { PATHS } from "../routes/paths";

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const page = pathname.startsWith(PATHS.BLOG) ? "blog" : "home";

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, pathname]);

  return (
    <div className="site">
      <DocumentHead page={page} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header container">
        <nav aria-label="Main navigation" className="site-nav">
          <NavLink to={PATHS.HOME} end>
            Home
          </NavLink>
          <NavLink to={PATHS.BLOG} end>
            Blog
          </NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer container">
        <p>© {new Date().getFullYear()} Lena Imdahl</p>
      </footer>
    </div>
  );
}

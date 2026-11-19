import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DocumentHead, { type Page } from "./DocumentHead";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/useLanguage";
import { PATHS } from "../routes/paths";

const YEAR = new Date().getFullYear();

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const { t } = useLanguage();
  const page: Page =
    pathname === PATHS.HOME
      ? "home"
      : pathname === PATHS.BLOG
        ? "blog"
        : "notFound";

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="site">
      <DocumentHead page={page} />
      <a href="#main-content" className="skip-link">
        {t.nav.skip}
      </a>

      <header className="site-header container">
        <nav aria-label={t.nav.label} className="site-nav">
          <NavLink to={PATHS.HOME} end>
            {t.nav.home}
          </NavLink>
          <NavLink to={PATHS.BLOG} end>
            {t.nav.blog}
          </NavLink>
          <LanguageSwitcher />
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer container">
        <p>© {YEAR} Lena Imdahl</p>
      </footer>
    </div>
  );
}

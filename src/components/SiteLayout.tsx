import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DocumentHead from "./DocumentHead";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";
import { PATHS } from "../routes/paths";

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const { t } = useLanguage();
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
        <p>© {new Date().getFullYear()} Lena Imdahl</p>
      </footer>
    </div>
  );
}

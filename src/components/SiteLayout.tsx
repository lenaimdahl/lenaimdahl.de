import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DocumentHead from "./DocumentHead";
import { PATHS } from "../routes/paths";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "border-b py-1 transition-colors",
    isActive
      ? "border-rose text-rose dark:border-rose-light dark:text-rose-light"
      : "border-transparent hover:text-rose dark:hover:text-rose-light",
  ].join(" ");

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const page = pathname.startsWith(PATHS.BLOG) ? "blog" : "home";

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, pathname]);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <DocumentHead page={page} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header className="mx-auto w-full max-w-4xl px-6 pt-6 md:px-10">
        <nav
          aria-label="Main navigation"
          className="flex justify-end border-b border-ink/10 pb-4 dark:border-white/10"
        >
          <div className="flex gap-6 font-mono text-xs tracking-widest text-ink/60 uppercase dark:text-white/60">
            <NavLink to={PATHS.HOME} end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to={PATHS.BLOG} end className={navLinkClass}>
              Blog
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="mx-auto w-full max-w-4xl px-6 py-8 md:px-10">
        <p className="border-t border-ink/10 pt-4 text-xs text-ink/50 dark:border-white/10 dark:text-white/50">
          © {new Date().getFullYear()} Lena Imdahl
        </p>
      </footer>
    </div>
  );
}

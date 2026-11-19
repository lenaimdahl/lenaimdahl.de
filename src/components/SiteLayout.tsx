import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
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
    <div className="flex min-h-screen flex-col transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
      <DocumentHead page={page} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10 focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900"
      >
        Skip to content
      </a>

      <header className="mx-4 border-b border-gray-200 px-4 py-4 dark:border-gray-700 md:mx-12 lg:mx-24">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-6"
        >
          <NavLink
            to={PATHS.HOME}
            end
            className="font-semibold transition-colors hover:text-red-500"
          >
            Lena Imdahl
          </NavLink>
          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
            <NavLink
              to={PATHS.BLOG}
              end
              className="transition-colors hover:text-red-500"
            >
              Blog
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="w-full p-4 text-center text-xs text-gray-400">
        <p>
          {page !== "home" ? (
            <Link
              to={PATHS.HOME}
              className="underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Back to Lena's portfolio
            </Link>
          ) : (
            <>
              Based on{" "}
              <a
                href="https://github.com/apvarun/showfolio-hugo-theme"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800 dark:hover:text-blue-300"
              >
                Showfolio
              </a>
            </>
          )}{" "}
          · Copyright &copy; Lena Imdahl
        </p>
      </footer>
    </div>
  );
}

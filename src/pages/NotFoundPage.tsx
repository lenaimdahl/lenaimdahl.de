import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/useLanguage";
import { PATHS } from "../routes/paths";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="blog container">
      <h1 className="page-title">{t.notFound.title}</h1>
      <p className="lead">{t.notFound.text}</p>
      <p className="not-found-link">
        <Link to={PATHS.HOME} className="project-link">
          <span aria-hidden="true" className="arrow arrow--back">
            ←
          </span>{" "}
          {t.notFound.back}
        </Link>
      </p>
    </main>
  );
}

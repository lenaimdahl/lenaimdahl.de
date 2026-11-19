import portrait from "../img/lenaimdahl.jpg";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/useLanguage";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="container">
      <section className="hero">
        <div>
          <h1 className="page-title">Lena Imdahl</h1>
          <p className="hero-role">{t.home.role}</p>
          <p className="lead">{t.home.lead}</p>
        </div>
        <img src={portrait} className="portrait" alt={t.home.portraitAlt} />
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="section-grid">
          <h2 id="about-title" className="label">
            {t.home.aboutLabel}
          </h2>
          <p className="about-text">{t.home.about}</p>
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-grid">
          <h2 id="work-title" className="label">
            {t.home.workLabel}
          </h2>
          <Projects />
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="section-grid">
          <h2 id="contact-title" className="label">
            {t.home.contactLabel}
          </h2>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}

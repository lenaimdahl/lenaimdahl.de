import portrait from "../img/lenaimdahl.jpg";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
  return (
    <main id="main-content" className="container">
      <section className="hero">
        <div>
          <h1 className="page-title">Lena Imdahl</h1>
          <p className="hero-role">Developer &amp; Designer</p>
          <p className="lead">
            Crafting beautiful, functional interfaces and meaningful digital
            experiences.
          </p>
        </div>
        <img src={portrait} className="portrait" alt="Portrait of Lena Imdahl" />
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="section-grid">
          <h2 id="about-title" className="label">
            About
          </h2>
          <p className="about-text">
            I'm a designer and developer passionate about crafting beautiful,
            functional interfaces. I combine a strong aesthetic eye with solid
            engineering skills to build products people love.
          </p>
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-grid">
          <h2 id="work-title" className="label">
            Work
          </h2>
          <Projects />
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="section-grid">
          <h2 id="contact-title" className="label">
            Contact
          </h2>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}

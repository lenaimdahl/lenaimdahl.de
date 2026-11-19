import bookshelf from "../img/work/bookshelf.jpg";
import citizenLab from "../img/work/barbara-citizen.png";
import logoMotion from "../img/work/logo-motion.gif";
import { useLanguage } from "../i18n/useLanguage";
import type { Translation } from "../i18n/translations";

interface Project {
  id: keyof Translation["projects"];
  stack: string;
  href: string;
  image: string;
  fit?: "cover" | "contain";
  position?: string;
}

const ATELIER = "https://atelier.lenaimdahl.de";

const projects: Project[] = [
  {
    id: "logoMotion",
    stack: "p5.js · TypeScript",
    href: `${ATELIER}/logo-motion`,
    image: logoMotion,
    fit: "contain",
  },
  {
    id: "citizenLab",
    stack: "React · TypeScript · SVG · Vitest",
    href: `${ATELIER}/citizen-lab`,
    image: citizenLab,
    fit: "contain",
  },
  {
    id: "bookshelf",
    stack: "React · TypeScript · Go · PostgreSQL · Open Library API",
    href: `${ATELIER}/books`,
    image: bookshelf,
    position: "top",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <ul className="projects">
      {projects.map((project) => {
        const text = t.projects[project.id];

        return (
          <li key={project.id}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              <div
                className={
                  project.fit === "contain"
                    ? "project-media project-media--contain"
                    : "project-media"
                }
              >
                <img
                  src={project.image}
                  alt={text.imageAlt}
                  loading="lazy"
                  style={
                    project.position
                      ? { objectPosition: project.position }
                      : undefined
                  }
                />
              </div>
              <div>
                <h3 className="project-title">{text.title}</h3>
                <p className="project-text">{text.description}</p>
                <p className="project-stack">{project.stack}</p>
                <span className="project-link">
                  {t.home.viewProject}{" "}
                  <span aria-hidden="true" className="arrow">
                    →
                  </span>
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

import bookshelf from "../img/work/bookshelf.jpg";
import citizenLab from "../img/work/barbara-citizen.png";
import logoMotion from "../img/work/logo-motion.gif";

interface Project {
  title: string;
  description: string;
  stack: string;
  href: string;
  image: string;
  imageAlt: string;
  /** "contain" shows the whole image (e.g. animations) instead of cropping it */
  fit?: "cover" | "contain";
  /** CSS object-position for cropped images */
  position?: string;
}

const ATELIER = "https://atelier.lenaimdahl.de";

// Newest first
const projects: Project[] = [
  {
    title: "40C3 Logo Motion",
    description:
      "Variations that bring the 40C3 logo to life with code: typing, glitches, flipping digits and colour waves.",
    stack: "p5.js · TypeScript",
    href: `${ATELIER}/logo-motion`,
    image: logoMotion,
    imageAlt:
      "Animated 40C3 logo glitching out of signal noise into the words Model Citizens",
    fit: "contain",
  },
  {
    title: "40C3 Citizen Lab",
    description:
      "Build your own model citizen for 40C3: pick a face, colours and decorations, then share it as a link or download it as SVG.",
    stack: "React · TypeScript · SVG · Vitest",
    href: `${ATELIER}/citizen-lab`,
    image: citizenLab,
    imageAlt:
      "A model citizen built in the Citizen Lab: lilac face, teal hair, pointed ears and earrings",
    fit: "contain",
  },
  {
    title: "Bookshelf",
    description:
      "A shared shelf where visitors pick their favourite from a library of 100 feminist books.",
    stack: "React · TypeScript · Go · PostgreSQL · Open Library API",
    href: `${ATELIER}/books`,
    image: bookshelf,
    imageAlt:
      "Screenshot of the shared shelf showing favourite books and how often each was picked",
    position: "top",
  },
];

export default function Projects() {
  return (
    <ul className="projects">
      {projects.map((project) => (
        <li key={project.title}>
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
                alt={project.imageAlt}
                loading="lazy"
                style={
                  project.position
                    ? { objectPosition: project.position }
                    : undefined
                }
              />
            </div>
            <div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-text">{project.description}</p>
              <p className="project-stack">{project.stack}</p>
              <span className="project-link">
                View project{" "}
                <span aria-hidden="true" className="arrow">
                  →
                </span>
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

import logoMotion from "../img/work/logo-motion.gif";

interface Project {
  title: string;
  description: string;
  stack: string;
  href: string;
  image: string;
  imageAlt: string;
}

const ATELIER = "https://atelier.lenaimdahl.de";

// Screenshots live in public/work/ so they can be swapped without a code change.
const projects: Project[] = [
  {
    title: "Bookshelf",
    description:
      "A shared shelf where visitors pick their favourite from a library of 100 feminist books.",
    stack: "React · TypeScript · Go · PostgreSQL · Open Library API",
    href: `${ATELIER}/books`,
    image: "/work/bookshelf.png",
    imageAlt: "Screenshot of the Bookshelf project",
  },
  {
    title: "40C3 Citizen Lab",
    description:
      "Build your own model citizen for 40C3: pick a face, colours and decorations, then share it as a link or download it as SVG.",
    stack: "React · TypeScript · SVG · Vitest",
    href: `${ATELIER}/citizen-lab`,
    image: "/work/citizen-lab.png",
    imageAlt: "Screenshot of the 40C3 Citizen Lab",
  },
  {
    title: "40C3 Logo Motion",
    description:
      "Variations that bring the 40C3 logo to life with code: typing, glitches, flipping digits and colour waves.",
    stack: "p5.js · TypeScript",
    href: `${ATELIER}/logo-motion`,
    image: logoMotion,
    imageAlt: "Animated 40C3 logo made of coloured LED dots",
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
            <div className="project-media">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
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

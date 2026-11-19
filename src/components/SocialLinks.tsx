import { useLanguage } from "../i18n/useLanguage";
import type { Translation } from "../i18n/translations";

interface SocialLink {
  label: string | ((t: Translation) => string);
  handle: string;
  href: string;
  external: boolean;
}

const links: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "in/lenaimdahl",
    href: "https://linkedin.com/in/lenaimdahl",
    external: true,
  },
  {
    label: "GitHub",
    handle: "lenaimdahl",
    href: "https://github.com/lenaimdahl",
    external: true,
  },
  {
    label: (t) => t.home.email,
    handle: "hello@lenaimdahl.de",
    href: "mailto:hello@lenaimdahl.de",
    external: false,
  },
];

export default function SocialLinks() {
  const { t } = useLanguage();

  return (
    <ul className="contact-list">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span>
              {typeof link.label === "function" ? link.label(t) : link.label}
            </span>
            <span className="contact-handle">
              {link.handle}{" "}
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

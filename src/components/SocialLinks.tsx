const links = [
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
    label: "Email",
    handle: "hello@lenaimdahl.de",
    href: "mailto:hello@lenaimdahl.de",
    external: false,
  },
];

export default function SocialLinks() {
  return (
    <ul className="contact-list">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span>{link.label}</span>
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

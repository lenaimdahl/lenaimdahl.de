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
    <ul className="divide-y divide-ink/10 dark:divide-white/10">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-baseline justify-between gap-4 py-3 first:pt-0 transition-colors hover:text-rose dark:hover:text-rose-light"
          >
            <span className="text-lg">{link.label}</span>
            <span className="text-sm text-ink/50 transition-colors group-hover:text-rose dark:text-white/50 dark:group-hover:text-rose-light">
              {link.handle}{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

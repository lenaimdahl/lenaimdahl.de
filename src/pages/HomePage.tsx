import portrait from "../img/lenaimdahl.jpg";
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl flex-1 px-6 md:px-10"
    >
      <section className="grid items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div>
          <h1 className="mb-4 text-5xl leading-[1] font-bold tracking-tight md:text-6xl">
            Lena Imdahl
          </h1>
          <p className="mb-8 text-2xl font-light text-rose md:text-3xl dark:text-rose-light">
            Developer &amp; Designer
          </p>
          <p className="max-w-md text-lg leading-relaxed font-light text-ink/75 dark:text-white/75">
            Crafting beautiful, functional interfaces and meaningful digital
            experiences.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[15rem] md:max-w-[17rem]">
          <img
            src={portrait}
            className="aspect-[4/5] w-full rounded-t-full rounded-b-md object-cover object-[42%_center]"
            alt="Portrait of Lena Imdahl"
          />
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-8 border-t border-ink/10 py-14 dark:border-white/10"
        aria-labelledby="about-title"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
          <h2
            id="about-title"
            className="font-mono text-xs font-bold tracking-widest text-rose uppercase dark:text-rose-light"
          >
            About
          </h2>
          <p className="text-lg leading-relaxed font-light md:text-xl">
            I'm a designer and developer passionate about crafting beautiful,
            functional interfaces. I combine a strong aesthetic eye with solid
            engineering skills to build products people love.
          </p>
        </div>
      </section>

      <section
        className="border-t border-ink/10 py-14 dark:border-white/10"
        aria-labelledby="contact-title"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
          <h2
            id="contact-title"
            className="font-mono text-xs font-bold tracking-widest text-rose uppercase dark:text-rose-light"
          >
            Contact
          </h2>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}

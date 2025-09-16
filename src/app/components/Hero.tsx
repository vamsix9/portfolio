export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-normal mx-auto">
            I'm Vamsi, a Software Engineer based in Bengaluru, India
          </h1>
          <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-normal max-w-prose mx-auto">
            I craft performant, accessible, and maintainable products using Next.js, TypeScript, and modern tooling.
          </p>
          <div className="flex gap-2.5 justify-center">
            <a href="#projects" className="rounded-md bg-foreground text-background px-4 py-2 text-sm">
              View Projects
            </a>
            <a href="#contact" className="rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



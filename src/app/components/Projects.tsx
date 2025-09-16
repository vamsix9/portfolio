type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This site showcasing my work, built with Next.js 15 and Tailwind 4.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your/repo",
  },
  {
    title: "Realtime Chat",
    description: "Socket-powered chat with optimistic UI and modern DX.",
    tech: ["Next.js", "WebSocket", "Prisma"],
    link: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border border-black/10 dark:border-white/10 p-4 flex flex-col gap-3">
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm opacity-80">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 text-sm">
                {p.link && (
                  <a href={p.link} className="underline underline-offset-4">Live</a>
                )}
                {p.repo && (
                  <a href={p.repo} className="underline underline-offset-4">Code</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



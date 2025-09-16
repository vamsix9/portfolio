type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Acme Corp",
    role: "Frontend Engineer",
    period: "2023 – Present",
    points: [
      "Built accessible UI with Next.js and Tailwind",
      "Improved bundle size and page speed scores",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full‑stack Developer",
    period: "2021 – 2023",
    points: [
      "Designed REST/GraphQL APIs and integrated CI",
      "Led migration to TypeScript",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid gap-6">
          {experience.map((item) => (
            <article key={item.company} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.company}</p>
                </div>
                <span className="text-xs sm:text-sm whitespace-nowrap opacity-80">{item.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



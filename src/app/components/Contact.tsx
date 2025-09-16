export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Contact</h2>
        <p className="text-sm/6 sm:text-base opacity-80 mb-4">
          I’m open to freelance and full‑time opportunities. Reach out:
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="mailto:you@example.com" className="underline underline-offset-4">you@example.com</a>
          <a href="https://www.linkedin.com/in/your-profile" className="underline underline-offset-4">LinkedIn</a>
          <a href="https://github.com/your" className="underline underline-offset-4">GitHub</a>
        </div>
      </div>
    </section>
  );
}



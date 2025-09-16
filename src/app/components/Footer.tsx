export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-16">
      <div className="mx-auto max-w-5xl px-4 text-sm opacity-80 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Vamsi</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}



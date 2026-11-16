export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-mist/70 italic font-display max-w-md">
          "Passionate about building scalable software solutions and applying data-driven approaches to solve real-world problems."
        </p>
        <p className="font-mono text-xs text-mist/50">
          © 2026 <span className="text-ember/70">Mukesh Elango</span>
        </p>
      </div>
    </footer>
  );
}

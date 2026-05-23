import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Fitur", href: "#fitur" },
    { label: "Solusi", href: "#solusi" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-blue-600 tracking-tight">
          LokaOps
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl px-5 py-2.5 transition-colors"
          >
            Masuk
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 transition-colors"
          >
            Coba Gratis
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a href="#" className="text-sm font-medium border border-slate-300 text-slate-700 rounded-xl px-5 py-2.5 text-center">
              Masuk
            </a>
            <a href="#" className="text-sm font-semibold bg-blue-600 text-white rounded-xl px-5 py-2.5 text-center">
              Coba Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

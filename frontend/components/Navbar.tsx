import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Fitur", href: "#fitur" },
    { label: "Solusi", href: "#solusi" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ];

  const opacity = Math.min(scrollY / 80, 1);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `rgba(255,255,255,${scrolled ? 0.92 : 0})`,
          backdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
          boxShadow: scrolled
            ? `0 1px 0 rgba(226,232,240,${opacity}), 0 4px 24px rgba(15,23,42,${opacity * 0.06})`
            : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      <div
        className="relative max-w-6xl mx-auto px-4 flex items-center justify-between"
        style={{
          height: scrolled ? "60px" : "72px",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <a
          href="#"
          className="font-bold tracking-tight text-blue-600"
          style={{
            fontSize: scrolled ? "1.25rem" : "1.5rem",
            transition: "font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          LokaOps
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 relative group"
              style={{ transition: "color 0.2s" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                style={{ transition: "width 0.25s ease" }}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 rounded-xl px-5 py-2.5"
            style={{ transition: "all 0.2s ease" }}
          >
            Masuk
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-px"
            style={{ transition: "all 0.2s ease" }}
          >
            Coba Gratis
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          style={{ transition: "background 0.2s" }}
          onClick={() => setOpen(!open)}
        >
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.25s ease, opacity 0.2s ease",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: open ? "1px solid #e2e8f0" : "none",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 hover:translate-x-1"
              style={{
                transition: "all 0.2s ease",
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a
              href="#"
              className="text-sm font-medium border border-slate-300 text-slate-700 rounded-xl px-5 py-2.5 text-center hover:border-blue-300 hover:text-blue-600"
              style={{ transition: "all 0.2s ease" }}
            >
              Masuk
            </a>
            <a
              href="#"
              className="text-sm font-semibold bg-blue-600 text-white rounded-xl px-5 py-2.5 text-center hover:bg-blue-700"
              style={{ transition: "background 0.2s ease" }}
            >
              Coba Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

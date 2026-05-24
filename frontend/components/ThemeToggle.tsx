import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type ThemeMode } from "../context/ThemeContext";

const options: { value: ThemeMode; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

interface ThemeToggleProps {
  floating?: boolean;
}

export default function ThemeToggle({ floating = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const CurrentIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  const buttonStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: "999px",
    color: "currentColor",
    transition: "all 0.2s ease",
  };

  const dropdownStyle: React.CSSProperties = {
    background: resolvedTheme === "dark"
      ? "rgba(15, 23, 42, 0.92)"
      : "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: "14px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    minWidth: "140px",
    position: "absolute",
    right: 0,
    top: "calc(100% + 8px)",
    zIndex: 9999,
  };

  const wrapperStyle: React.CSSProperties = floating
    ? { position: "fixed", top: "24px", right: "24px", zIndex: 9999 }
    : { position: "relative" };

  return (
    <div ref={ref} style={wrapperStyle} className={floating ? "max-sm:!top-4 max-sm:!right-4" : ""}>
      <button
        onClick={() => setOpen(!open)}
        style={buttonStyle}
        className="flex items-center justify-center w-9 h-9 hover:border-blue-400/40"
        aria-label="Toggle theme"
      >
        <CurrentIcon size={16} />
      </button>

      {open && (
        <div style={dropdownStyle} className="py-1.5 px-1">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              onClick={() => { setTheme(value); setOpen(false); }}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm font-medium"
              style={{
                color: theme === value
                  ? "#3B82F6"
                  : resolvedTheme === "dark" ? "#94A3B8" : "#475569",
                background: theme === value
                  ? "rgba(59,130,246,0.1)"
                  : "transparent",
                transition: "all 0.15s ease",
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

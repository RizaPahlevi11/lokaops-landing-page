import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Bot, Mail, Lock, User, ArrowRight, CheckCircle, Bell, BarChart2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type AuthMode = "login" | "register" | "forgot";

function MiniDashboard() {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border"
      style={{
        background: "rgba(15, 23, 42, 0.85)",
        borderColor: "rgba(148, 163, 184, 0.18)",
        backdropFilter: "blur(24px)",
      }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        </div>
        <span className="text-white/80 text-xs font-medium ml-2">LokaOps Dashboard</span>
      </div>

      <div className="p-4 space-y-3">
        <div
          className="rounded-xl p-3 border"
          style={{ background: "rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.25)" }}
        >
          <div className="flex items-start justify-between mb-2">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(59,130,246,0.2)", color: "#60A5FA" }}
            >
              Lead Baru
            </span>
            <span className="text-xs" style={{ color: "#64748B" }}>2 mnt lalu</span>
          </div>
          <p className="text-sm font-semibold" style={{ color: "#F8FAFC" }}>Rina — Paket Wedding 300 pax</p>
          <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>Tertarik · Estimasi Rp18.000.000</p>
          <div className="mt-2 flex gap-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E" }}
            >
              Tertarik
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: "rgba(148,163,184,0.1)", color: "#94A3B8" }}
            >
              Wedding
            </span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 border"
          style={{ background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.2)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Bot size={12} style={{ color: "#8B5CF6" }} />
            <span className="text-xs font-semibold" style={{ color: "#A78BFA" }}>AI Summary</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>
            Customer mencari paket dekorasi wedding. Budget Rp15–20 juta. Minta katalog hari ini.
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs font-medium" style={{ color: "#F59E0B" }}>
            <Bell size={10} />
            Follow-up besok 10.00
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Lead Bulan Ini", value: "128", color: "#60A5FA" },
            { label: "Quotation", value: "43", color: "#A78BFA" },
            { label: "Closing", value: "18", color: "#22C55E" },
            { label: "Omzet", value: "Rp240 jt", color: "#F59E0B" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-2.5"
              style={{ background: "rgba(148,163,184,0.06)", border: "1px solid rgba(148,163,184,0.1)" }}
            >
              <p className="text-xs" style={{ color: "#64748B" }}>{m.label}</p>
              <p className="text-sm font-bold" style={{ color: m.color }}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

interface AuthPageProps {
  onBack?: () => void;
}

export default function AuthPage({ onBack }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [forgotSent, setForgotSent] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSent(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.35), transparent 30%),
          radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.28), transparent 28%),
          radial-gradient(circle at 50% 80%, rgba(34, 211, 238, 0.18), transparent 35%),
          #030712
        `,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <ThemeToggle floating />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .auth-input::placeholder { color: #475569; }
        .auth-input:focus { outline: none; }
        .auth-input:-webkit-autofill,
        .auth-input:-webkit-autofill:hover,
        .auth-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px rgba(15, 23, 42, 0.85) inset;
          -webkit-text-fill-color: #F8FAFC;
          caret-color: #F8FAFC;
        }
        .tab-active {
          color: #F8FAFC;
          border-bottom: 2px solid #3B82F6;
        }
        .tab-inactive {
          color: #64748B;
          border-bottom: 2px solid transparent;
        }
        .google-btn:hover { background: rgba(255,255,255,0.08) !important; }
        .primary-btn:hover { box-shadow: 0 0 28px rgba(59,130,246,0.45); transform: translateY(-1px); }
        .primary-btn:active { transform: translateY(0); }
        .auth-link { color: #60A5FA; }
        .auth-link:hover { color: #93C5FD; text-decoration: underline; }
        .checkbox-custom:checked { accent-color: #3B82F6; }
      `}</style>

      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.10), transparent 55%)",
          }}
        />

        <div className="relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium mb-10"
            style={{ color: "#94A3B8", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            <ArrowLeft size={15} />
            Kembali ke beranda
          </button>

          <div className="mb-2">
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: "#F8FAFC" }}
            >
              Loka<span style={{ color: "#3B82F6" }}>Ops</span>
            </span>
          </div>
          <p className="text-sm mb-10" style={{ color: "#64748B" }}>
            AI CRM & Operations Platform
          </p>

          <h2 className="text-3xl font-extrabold leading-snug mb-4" style={{ color: "#F8FAFC" }}>
            Ubah chat customer<br />
            jadi <span style={{ color: "#60A5FA" }}>closing otomatis.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
            Lead, follow-up, quotation, invoice, dan laporan penjualan — semuanya dalam satu platform AI.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { icon: <CheckCircle size={14} />, text: "AI mendeteksi lead otomatis dari WhatsApp", color: "#22C55E" },
              { icon: <Bell size={14} />, text: "Reminder follow-up yang tidak pernah terlewat", color: "#F59E0B" },
              { icon: <BarChart2 size={14} />, text: "Dashboard omzet & pipeline real-time", color: "#60A5FA" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-sm" style={{ color: "#94A3B8" }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="max-w-sm">
            <MiniDashboard />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #030712, transparent)" }}
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-12 relative">
        <div className="lg:hidden mb-8 w-full max-w-md">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium mb-4"
            style={{ color: "#94A3B8" }}
          >
            <ArrowLeft size={15} />
            Kembali
          </button>
          <span className="text-xl font-extrabold" style={{ color: "#F8FAFC" }}>
            Loka<span style={{ color: "#3B82F6" }}>Ops</span>
          </span>
        </div>

        <div
          className="w-full max-w-md rounded-2xl p-8"
          style={{
            background: "rgba(15, 23, 42, 0.72)",
            border: "1px solid rgba(148, 163, 184, 0.18)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.08)",
          }}
        >
          {mode !== "forgot" && (
            <div className="flex gap-0 mb-8 border-b" style={{ borderColor: "rgba(148,163,184,0.12)" }}>
              {(["login", "register"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setMode(tab); setShowPassword(false); setShowConfirmPassword(false); }}
                  className={`flex-1 pb-3 text-sm font-semibold transition-all ${mode === tab ? "tab-active" : "tab-inactive"}`}
                  style={{ transition: "all 0.2s ease" }}
                >
                  {tab === "login" ? "Masuk" : "Daftar"}
                </button>
              ))}
            </div>
          )}

          {mode === "login" && (
            <div>
              <div className="mb-6">
                <h1 className="text-xl font-bold mb-1" style={{ color: "#F8FAFC" }}>Selamat datang kembali</h1>
                <p className="text-sm" style={{ color: "#64748B" }}>Masuk ke akun LokaOps Anda</p>
              </div>

              <button
                className="google-btn w-full flex items-center justify-center gap-3 rounded-xl py-3 mb-5 font-medium text-sm"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(148,163,184,0.18)",
                  color: "#F8FAFC",
                  transition: "all 0.2s ease",
                }}
              >
                <GoogleIcon />
                Masuk dengan Google
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px" style={{ background: "rgba(148,163,184,0.12)" }} />
                <span className="text-xs" style={{ color: "#475569" }}>atau dengan email</span>
                <div className="flex-1 h-px" style={{ background: "rgba(148,163,184,0.12)" }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="nama@bisnis.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="auth-input w-full rounded-xl pl-10 pr-4 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password Anda"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="auth-input w-full rounded-xl pl-10 pr-11 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "#475569" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  <div className="flex justify-end mt-1.5">
                    <button
                      type="button"
                      className="text-xs auth-link"
                      style={{ transition: "color 0.2s" }}
                      onClick={() => setMode("forgot")}
                    >
                      Lupa password?
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="primary-btn w-full rounded-xl py-3 font-semibold text-sm text-white mt-2"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                    transition: "all 0.2s ease",
                    boxShadow: "0 0 20px rgba(59,130,246,0.25)",
                  }}
                >
                  Masuk ke LokaOps
                </button>
              </form>

              <p className="text-center text-xs mt-5" style={{ color: "#64748B" }}>
                Belum punya akun?{" "}
                <button className="auth-link font-semibold" onClick={() => setMode("register")}>
                  Daftar gratis
                </button>
              </p>
            </div>
          )}

          {mode === "register" && (
            <div>
              <div className="mb-6">
                <h1 className="text-xl font-bold mb-1" style={{ color: "#F8FAFC" }}>Buat akun LokaOps</h1>
                <p className="text-sm" style={{ color: "#64748B" }}>Gratis 14 hari, tanpa kartu kredit</p>
              </div>

              <button
                className="google-btn w-full flex items-center justify-center gap-3 rounded-xl py-3 mb-5 font-medium text-sm"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(148,163,184,0.18)",
                  color: "#F8FAFC",
                  transition: "all 0.2s ease",
                }}
              >
                <GoogleIcon />
                Daftar dengan Google
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px" style={{ background: "rgba(148,163,184,0.12)" }} />
                <span className="text-xs" style={{ color: "#475569" }}>atau dengan email</span>
                <div className="flex-1 h-px" style={{ background: "rgba(148,163,184,0.12)" }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="auth-input w-full rounded-xl pl-10 pr-4 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="nama@bisnis.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="auth-input w-full rounded-xl pl-10 pr-4 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Minimal 8 karakter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="auth-input w-full rounded-xl pl-10 pr-11 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "#475569" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                    Konfirmasi Password
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Ulangi password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="auth-input w-full rounded-xl pl-10 pr-11 py-3 text-sm"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        border: confirmPassword && confirmPassword !== password
                          ? "1px solid rgba(239,68,68,0.6)"
                          : "1px solid rgba(148,163,184,0.18)",
                        color: "#F8FAFC",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => {
                        if (!confirmPassword || confirmPassword === password)
                          e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)";
                      }}
                      onBlur={(e) => {
                        if (!confirmPassword || confirmPassword === password)
                          e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)";
                      }}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "#475569" }}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {confirmPassword && confirmPassword !== password && (
                    <p className="text-xs mt-1" style={{ color: "#EF4444" }}>Password tidak cocok</p>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="checkbox-custom mt-0.5 w-4 h-4 rounded flex-shrink-0"
                    style={{ accentColor: "#3B82F6" }}
                    required
                  />
                  <span className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                    Saya setuju dengan{" "}
                    <a href="#" className="auth-link font-medium">Syarat & Ketentuan</a>{" "}
                    dan{" "}
                    <a href="#" className="auth-link font-medium">Kebijakan Privasi</a>{" "}
                    LokaOps
                  </span>
                </label>

                <button
                  type="submit"
                  className="primary-btn w-full rounded-xl py-3 font-semibold text-sm text-white mt-2"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                    transition: "all 0.2s ease",
                    boxShadow: "0 0 20px rgba(59,130,246,0.25)",
                  }}
                >
                  Buat Akun Gratis
                  <ArrowRight size={14} className="inline ml-2" />
                </button>
              </form>

              <p className="text-center text-xs mt-5" style={{ color: "#64748B" }}>
                Sudah punya akun?{" "}
                <button className="auth-link font-semibold" onClick={() => setMode("login")}>
                  Masuk
                </button>
              </p>
            </div>
          )}

          {mode === "forgot" && (
            <div>
              <button
                onClick={() => setMode("login")}
                className="flex items-center gap-1.5 text-xs mb-6"
                style={{ color: "#64748B", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                <ArrowLeft size={13} />
                Kembali ke login
              </button>

              {!forgotSent ? (
                <>
                  <div className="mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)" }}
                    >
                      <Mail size={20} style={{ color: "#60A5FA" }} />
                    </div>
                    <h1 className="text-xl font-bold mb-1" style={{ color: "#F8FAFC" }}>Lupa Password?</h1>
                    <p className="text-sm" style={{ color: "#64748B" }}>
                      Masukkan email Anda dan kami akan kirimkan link untuk reset password.
                    </p>
                  </div>

                  <form onSubmit={handleForgot} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>
                        Email
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#475569" }} />
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="nama@bisnis.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="auth-input w-full rounded-xl pl-10 pr-4 py-3 text-sm"
                          style={{
                            background: "rgba(15,23,42,0.85)",
                            border: "1px solid rgba(148,163,184,0.18)",
                            color: "#F8FAFC",
                            transition: "border-color 0.2s",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.18)")}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="primary-btn w-full rounded-xl py-3 font-semibold text-sm text-white"
                      style={{
                        background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                        transition: "all 0.2s ease",
                        boxShadow: "0 0 20px rgba(59,130,246,0.25)",
                      }}
                    >
                      Kirim Link Reset
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}
                  >
                    <CheckCircle size={24} style={{ color: "#22C55E" }} />
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: "#F8FAFC" }}>Email Terkirim!</h2>
                  <p className="text-sm mb-6" style={{ color: "#64748B" }}>
                    Kami telah mengirimkan link reset password ke{" "}
                    <span style={{ color: "#94A3B8", fontWeight: 600 }}>{email}</span>.
                    Cek inbox atau folder spam Anda.
                  </p>
                  <button
                    onClick={() => { setMode("login"); setForgotSent(false); }}
                    className="text-sm auth-link font-semibold"
                    style={{ transition: "color 0.2s" }}
                  >
                    Kembali ke login
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#334155" }}>
          © 2025 LokaOps · All rights reserved
        </p>
      </div>
    </div>
  );
}

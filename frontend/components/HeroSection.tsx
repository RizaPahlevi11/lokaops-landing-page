import { ArrowRight, Bot, Bell, FileText, BarChart2, CheckCircle } from "lucide-react";

function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-white/80 text-xs font-medium ml-2">LokaOps Dashboard</span>
        </div>

        <div className="p-4 space-y-3">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Lead Baru</span>
              <span className="text-xs text-slate-400">2 mnt lalu</span>
            </div>
            <p className="text-sm font-semibold text-slate-800">Rina — Paket Wedding 300 pax</p>
            <p className="text-xs text-slate-500 mt-0.5">Tertarik · Estimasi Rp18.000.000</p>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Tertarik</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Wedding</span>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Bot size={13} className="text-purple-600" />
              <span className="text-xs font-semibold text-purple-700">AI Summary</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Customer mencari paket dekorasi wedding. Budget Rp15–20 juta. Minta katalog hari ini.
            </p>
            <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 font-medium">
              <Bell size={11} />
              Follow-up besok 10.00
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Bell size={13} className="text-amber-500" />
              <span className="text-xs font-semibold text-slate-700">Reminder Hari Ini</span>
            </div>
            <div className="space-y-1.5">
              {["Rina — Follow-up harga paket", "Budi — Kirim revisi quotation", "CV Maju — Konfirmasi DP"].map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-red-400" : "bg-amber-400"}`} />
                  <span className="text-xs text-slate-600">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Lead Bulan Ini", value: "128", color: "text-blue-600" },
              { label: "Quotation", value: "43", color: "text-purple-600" },
              { label: "Closing", value: "18", color: "text-green-600" },
              { label: "Omzet", value: "Rp240 jt", color: "text-amber-600" },
            ].map((m) => (
              <div key={m.label} className="bg-slate-50 rounded-xl p-2.5">
                <p className="text-xs text-slate-500">{m.label}</p>
                <p className={`text-sm font-bold ${m.color}`}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
        <CheckCircle size={12} />
        Live Dashboard
      </div>
    </div>
  );
}

interface HeroSectionProps {
  onAuthClick?: () => void;
}

export default function HeroSection({ onAuthClick }: HeroSectionProps) {
  return (
    <section className="pt-28 pb-20 bg-white" id="hero">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Bot size={13} />
              AI Sales Assistant untuk bisnis berbasis chat
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight mb-5">
              Chat customer ramai, tapi banyak yang lupa{" "}
              <span className="text-blue-600">di-follow-up?</span>
            </h1>

            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              LokaOps membantu bisnis mengubah chat WhatsApp menjadi lead, reminder follow-up, quotation, invoice, dan laporan penjualan otomatis.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                onClick={onAuthClick}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-7 py-3.5 transition-colors text-sm cursor-pointer"
              >
                Coba Gratis
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl px-7 py-3.5 transition-colors text-sm"
              >
                <FileText size={16} />
                Lihat Demo
              </a>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed">
              Cocok untuk wedding organizer, klinik kecantikan, kursus, travel, properti, dealer, dan bisnis jasa lainnya.
            </p>
          </div>

          <div className="lg:pl-4">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

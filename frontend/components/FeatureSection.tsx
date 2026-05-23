import {
  MessageSquare,
  Bot,
  Bell,
  FileText,
  ReceiptText,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Lead dari Chat",
    desc: "Catat setiap customer yang masuk lewat WhatsApp sebagai lead terstruktur. Tidak ada lagi yang terlewat.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    preview: (
      <div className="mt-3 space-y-1.5">
        {["Rina — Wedding 300 pax", "Budi — Kursus desain", "Andi — Tour Lombok"].map((l, i) => (
          <div key={i} className="flex items-center gap-2 bg-blue-50 rounded-lg px-2.5 py-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-xs text-slate-600">{l}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Bot,
    title: "AI Customer Summary",
    desc: "AI membaca percakapan dan merangkum kebutuhan, budget, dan preferensi customer secara otomatis.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    preview: (
      <div className="mt-3 bg-purple-50 rounded-xl p-3 text-xs text-slate-600 leading-relaxed border border-purple-100">
        <span className="font-semibold text-purple-700 block mb-1">AI Summary</span>
        Customer mencari paket dekorasi premium. Budget Rp15–20 juta. Butuh follow-up hari Kamis.
      </div>
    ),
  },
  {
    icon: Bell,
    title: "Reminder Follow-up",
    desc: "Atur jadwal follow-up dan terima notifikasi otomatis agar tidak ada prospek yang terlupakan.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    preview: (
      <div className="mt-3 space-y-1.5">
        {[
          { name: "Rina", time: "Hari ini 10.00", status: "bg-red-400" },
          { name: "Sari", time: "Besok 14.00", status: "bg-amber-400" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between bg-amber-50 rounded-lg px-2.5 py-1.5 border border-amber-100">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${r.status}`} />
              <span className="text-xs font-medium text-slate-700">{r.name}</span>
            </div>
            <span className="text-xs text-slate-500">{r.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Template Balasan AI",
    desc: "Buat template pesan balasan profesional yang bisa dikustomisasi oleh AI sesuai konteks percakapan.",
    color: "text-green-600",
    bg: "bg-green-50",
    preview: (
      <div className="mt-3 bg-green-50 border border-green-100 rounded-xl p-3 text-xs text-slate-600 leading-relaxed">
        <span className="font-semibold text-green-700 block mb-1">Template: Balasan Paket</span>
        "Halo Kak Rina, terima kasih sudah menghubungi kami. Untuk paket wedding 300 pax, kami memiliki..."
      </div>
    ),
  },
  {
    icon: ReceiptText,
    title: "Quotation & Invoice",
    desc: "Buat dokumen penawaran dan invoice profesional dalam hitungan detik langsung dari data lead.",
    color: "text-sky-600",
    bg: "bg-sky-50",
    preview: (
      <div className="mt-3 bg-sky-50 border border-sky-100 rounded-xl p-3">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="font-semibold text-slate-700">QUO-2025-041</span>
          <span className="text-green-600 font-semibold">Terkirim</span>
        </div>
        <div className="text-xs text-slate-500">Rina — Paket Wedding</div>
        <div className="text-sm font-bold text-sky-700 mt-1">Rp18.000.000</div>
      </div>
    ),
  },
  {
    icon: BarChart2,
    title: "Dashboard Owner",
    desc: "Pantau performa bisnis secara real-time. Lihat lead, closing rate, dan omzet dari satu layar.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    preview: (
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {[
          { label: "Lead", val: "128", color: "text-blue-600" },
          { label: "Closing", val: "18", color: "text-green-600" },
          { label: "Rate", val: "14%", color: "text-purple-600" },
          { label: "Omzet", val: "Rp240jt", color: "text-amber-600" },
        ].map((m) => (
          <div key={m.label} className="bg-slate-50 rounded-lg p-2 text-center">
            <p className="text-xs text-slate-400">{m.label}</p>
            <p className={`text-sm font-bold ${m.color}`}>{m.val}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="fitur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Fitur Unggulan
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Semua yang dibutuhkan untuk merapikan{" "}
            <span className="text-blue-600">proses sales dari chat.</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base">
            Dari lead masuk hingga invoice terkirim — semua dalam satu platform yang mudah digunakan tanpa perlu keahlian teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className={`w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={f.color} />
                </div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">{f.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
                {f.preview}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

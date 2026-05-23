import { TrendingUp, AlertCircle, Bot, ArrowUpRight } from "lucide-react";

const pipeline = [
  { name: "Rina", type: "Wedding 300 pax", value: "Rp18.000.000", status: "Negotiation", statusColor: "bg-amber-100 text-amber-700" },
  { name: "Budi", type: "Kursus Desain 3 Bulan", value: "Rp4.500.000", status: "Quotation Sent", statusColor: "bg-blue-100 text-blue-700" },
  { name: "Andi", type: "Tour Lombok 2 Pax", value: "Rp6.800.000", status: "Follow-up", statusColor: "bg-purple-100 text-purple-700" },
  { name: "PT Maju", type: "Souvenir Bulk 500 pcs", value: "Rp22.500.000", status: "Closing", statusColor: "bg-green-100 text-green-700" },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Dashboard Real-time
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Pantau semua lead, follow-up, dan potensi{" "}
            <span className="text-blue-600">omzet dari satu dashboard.</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base">
            Owner bisa melihat kondisi bisnis secara real-time tanpa harus bertanya ke admin satu per satu.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">LokaOps — Sales Dashboard</span>
            </div>
            <span className="text-xs text-green-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Live
            </span>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Lead Bulan Ini", value: "128", sub: "+24% vs bulan lalu", color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Follow-up Hari Ini", value: "17", sub: "5 terlambat", color: "text-amber-600", bg: "bg-amber-50", warn: true },
                { label: "Quotation Terkirim", value: "43", sub: "Rp180 juta total", color: "text-purple-600", bg: "bg-purple-50" },
                { label: "Closing", value: "18", sub: "14% closing rate", color: "text-green-600", bg: "bg-green-50" },
              ].map((m) => (
                <div key={m.label} className={`${m.bg} rounded-xl p-4`}>
                  <p className="text-xs text-slate-500 font-medium mb-1">{m.label}</p>
                  <p className={`text-2xl font-extrabold ${m.color}`}>{m.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {m.warn ? <AlertCircle size={11} className="text-red-400" /> : <TrendingUp size={11} className="text-green-500" />}
                    <span className={`text-xs ${m.warn ? "text-red-500" : "text-green-600"} font-medium`}>{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold text-slate-700 mb-3">Pipeline Aktif</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 text-xs text-slate-400 font-medium px-3 pb-1 border-b border-slate-100">
                    <span>Customer</span>
                    <span>Kebutuhan</span>
                    <span>Nilai</span>
                    <span>Status</span>
                  </div>
                  {pipeline.map((row) => (
                    <div key={row.name} className="grid grid-cols-4 text-xs px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors items-center">
                      <span className="font-semibold text-slate-800">{row.name}</span>
                      <span className="text-slate-500 truncate pr-2">{row.type}</span>
                      <span className="font-semibold text-slate-700">{row.value}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium w-fit ${row.statusColor}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot size={14} className="text-purple-600" />
                    <span className="text-xs font-bold text-purple-700">AI Insight Hari Ini</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    5 lead belum di-follow-up lebih dari 3 hari. Prioritaskan Rina & PT Maju karena nilai transaksi tertinggi.
                  </p>
                  <button className="mt-3 text-xs text-purple-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Lihat detail <ArrowUpRight size={12} />
                  </button>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <span className="text-xs font-bold text-amber-700 block mb-2">Reminder Hari Ini</span>
                  <div className="space-y-1.5">
                    {[
                      { name: "Rina", note: "Follow-up harga", late: true },
                      { name: "CV Karya", note: "Konfirmasi DP", late: false },
                      { name: "Budi", note: "Revisi quotation", late: false },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${r.late ? "bg-red-400" : "bg-amber-400"}`} />
                        <span className="text-xs text-slate-600">
                          <span className="font-medium">{r.name}</span> — {r.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

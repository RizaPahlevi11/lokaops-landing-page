import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Rp199.000",
    period: "/bulan",
    desc: "Sempurna untuk bisnis baru yang ingin mulai mengelola lead dengan rapi.",
    features: [
      "Hingga 100 lead/bulan",
      "1 pengguna (admin)",
      "Lead dari chat manual",
      "Reminder follow-up",
      "Quotation dasar (5/bulan)",
      "Dashboard ringkas",
    ],
    cta: "Mulai Gratis",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "Rp499.000",
    period: "/bulan",
    desc: "Untuk bisnis yang sudah aktif dan ingin meningkatkan closing rate secara signifikan.",
    features: [
      "Lead tidak terbatas",
      "Hingga 5 pengguna",
      "AI Customer Summary",
      "Template balasan AI",
      "Quotation & Invoice PDF (unlimited)",
      "Dashboard owner lengkap",
      "Laporan penjualan bulanan",
      "Prioritas support",
    ],
    cta: "Coba Gratis 7 Hari",
    highlight: true,
    badge: "Paling Populer",
  },
  {
    name: "Business",
    price: "Rp999.000",
    period: "/bulan",
    desc: "Untuk tim sales yang lebih besar dengan kebutuhan otomatisasi dan integrasi penuh.",
    features: [
      "Semua fitur Growth",
      "Pengguna tidak terbatas",
      "Multi-channel (WA + Email)",
      "Integrasi WhatsApp Business API",
      "Custom template & branding",
      "Laporan detail per sales",
      "Onboarding & training tim",
      "Dedicated account manager",
    ],
    cta: "Hubungi Sales",
    highlight: false,
    badge: null,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="harga">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Harga
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Harga sederhana untuk mulai{" "}
            <span className="text-blue-600">merapikan sales.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base">
            Tidak ada biaya tersembunyi. Tidak ada kontrak panjang. Bisa upgrade atau downgrade kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all ${
                plan.highlight
                  ? "bg-blue-600 border-blue-700 shadow-2xl shadow-blue-200 scale-105"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4">
                  <Zap size={12} />
                  {plan.badge}
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}>
                {plan.name}
              </h3>
              <p className={`text-xs mb-4 leading-relaxed ${plan.highlight ? "text-blue-200" : "text-[#64748B]"}`}>
                {plan.desc}
              </p>

              <div className="flex items-end gap-1 mb-6">
                <span className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-[#64748B]"}`}>
                  {plan.period}
                </span>
              </div>

              <a
                href="#"
                className={`block text-center font-semibold rounded-xl px-6 py-3 text-sm transition-colors mb-6 ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-white/20" : "bg-blue-50"}`}>
                      <Check size={10} className={plan.highlight ? "text-white" : "text-blue-600"} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-[#64748B]"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#64748B] mt-8">
          ✓ Coba gratis 7 hari · ✓ Tanpa kartu kredit · ✓ Bisa batalkan kapan saja
        </p>
      </div>
    </section>
  );
}

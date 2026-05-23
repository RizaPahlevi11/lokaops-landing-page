import { ArrowRight, Play } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          Mulai Sekarang — Gratis 7 Hari
        </div>

        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Jangan biarkan lead hilang di{" "}
          <span className="text-amber-300">tumpukan chat.</span>
        </h2>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Mulai gunakan LokaOps hari ini dan rasakan perbedaannya — lebih sedikit lead terlewat, lebih banyak closing, dan owner punya data yang jelas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-xl px-8 py-4 text-base transition-colors shadow-lg"
          >
            Coba LokaOps Gratis
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl px-8 py-4 text-base transition-colors"
          >
            <Play size={16} />
            Lihat Demo
          </a>
        </div>

        <p className="text-blue-200 text-sm">
          Tanpa kartu kredit · Setup kurang dari 5 menit · Batalkan kapan saja
        </p>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/20 pt-12">
          {[
            { val: "2,000+", label: "Bisnis aktif" },
            { val: "98%", label: "Kepuasan pengguna" },
            { val: "3x", label: "Peningkatan closing rate" },
            { val: "< 5 mnt", label: "Setup pertama kali" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white mb-1">{s.val}</p>
              <p className="text-sm text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { X, Check } from "lucide-react";

const before = [
  "Chat customer tenggelam di antara notifikasi lain",
  "Admin lupa follow-up prospek yang sudah hangat",
  "Quotation dibuat manual di Word atau Excel",
  "Owner hanya bisa menebak jumlah lead dan omzet",
  "Data customer tersebar di banyak HP dan aplikasi",
  "Tidak ada sistem — semua mengandalkan ingatan admin",
];

const after = [
  "Setiap chat masuk langsung tercatat sebagai lead",
  "Reminder otomatis memastikan semua prospek di-follow-up",
  "Quotation profesional dibuat dalam hitungan detik",
  "Dashboard real-time menampilkan semua angka penjualan",
  "Semua data customer tersimpan rapi di satu tempat",
  "Sistem yang bekerja otomatis meski admin sedang sibuk",
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Transformasi
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Sebelum dan sesudah{" "}
            <span className="text-blue-600">menggunakan LokaOps.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base">
            Lihat perbedaan nyata dalam cara bisnis kamu mengelola customer dan penjualan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X size={16} className="text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-red-700">Sebelum LokaOps</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-red-600" />
                  </div>
                  <span className="text-sm text-red-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check size={16} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-700">Sesudah LokaOps</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-green-600" />
                  </div>
                  <span className="text-sm text-green-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

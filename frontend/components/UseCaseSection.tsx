import { Heart, Sparkles, GraduationCap, Plane, Home, Car } from "lucide-react";

const cases = [
  {
    icon: Heart,
    title: "Wedding Organizer",
    desc: "Kelola ratusan calon pengantin yang menghubungi via WhatsApp. Catat preferensi, budget, dan tanggal acara otomatis.",
    example: "Rina — 300 pax · Rp18 juta · Sabtu, 14 Juni",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: Sparkles,
    title: "Klinik Kecantikan",
    desc: "Tangani antrian booking treatment dan follow-up pasien yang tertarik paket khusus secara terstruktur.",
    example: "Sari — Laser Treatment · Booking Kamis 13.00",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: GraduationCap,
    title: "Tempat Kursus",
    desc: "Catat semua calon siswa, rekomendasikan kelas yang sesuai, dan ingatkan untuk mendaftar sebelum kuota habis.",
    example: "Budi — Kursus Desain 3 Bulan · Rp4.500.000",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Plane,
    title: "Travel Umrah & Wisata",
    desc: "Kelola leads paket perjalanan, follow-up setelah kirim brosur, dan buat invoice setelah deal.",
    example: "Pak Hadi — Umrah Plus Turki · 2 Pax",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: Home,
    title: "Properti",
    desc: "Pantau prospek pembeli atau penyewa, atur jadwal survei, dan kirim penawaran properti dengan cepat.",
    example: "Bu Lia — Kavling 120m² · Area Selatan",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Car,
    title: "Dealer Kendaraan",
    desc: "Catat minat calon pembeli, follow-up setelah test drive, dan buat SPJB langsung dari dashboard.",
    example: "Andi — Honda Civic · KPR 3 Tahun",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function UseCaseSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="usecase">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Untuk Siapa?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Dibuat untuk bisnis yang{" "}
            <span className="text-blue-600">closing lewat chat.</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base">
            LokaOps dirancang untuk berbagai jenis bisnis jasa dan produk yang mengandalkan WhatsApp sebagai channel penjualan utama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`bg-white rounded-2xl border ${c.border} shadow-sm p-6 hover:shadow-md transition-all hover:-translate-y-0.5`}
              >
                <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={c.color} />
                </div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">{c.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{c.desc}</p>
                <div className={`${c.bg} rounded-lg px-3 py-2 text-xs ${c.color} font-medium border ${c.border}`}>
                  {c.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

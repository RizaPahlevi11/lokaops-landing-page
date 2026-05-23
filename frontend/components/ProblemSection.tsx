import { MessageSquareOff, AlarmClock, FileX, PieChart, Smartphone } from "lucide-react";

const problems = [
  {
    icon: MessageSquareOff,
    title: "Chat customer tenggelam",
    description: "Pesan dari puluhan customer masuk bersamaan. Yang tidak segera dibalas langsung terlupakan di antara notifikasi lain.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: AlarmClock,
    title: "Admin lupa follow-up",
    description: "Tidak ada sistem reminder. Admin mengandalkan ingatan, sehingga banyak prospek hangat yang berakhir basi.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: FileX,
    title: "Penawaran dibuat manual",
    description: "Setiap quotation dibuat dari nol di Word atau Excel. Membuang waktu dan rawan salah kalkulasi atau informasi.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: PieChart,
    title: "Owner tidak punya laporan",
    description: "Tidak ada data berapa lead masuk, berapa yang closing, atau berapa omzet bulan ini. Semua hanya perkiraan.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Smartphone,
    title: "Data hanya ada di WhatsApp",
    description: "Semua history customer, negosiasi, dan kesepakatan terjebak di aplikasi chat. Tidak bisa dianalisis atau dilaporkan.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="solusi">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-red-500 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Masalah Nyata
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Masalahnya bukan kurang customer.{" "}
            <span className="text-red-500">Masalahnya follow-up yang berantakan.</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base">
            Bisnis yang ramai chat belum tentu ramai closing. Banyak peluang menguap karena tidak ada sistem yang mengelola percakapan menjadi tindakan nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 ${p.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={p.color} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.description}</p>
              </div>
            );
          })}

          <div className="bg-blue-600 rounded-2xl border border-blue-700 shadow-sm p-6 flex flex-col justify-center sm:col-span-2 lg:col-span-1">
            <p className="text-white font-semibold text-base leading-relaxed">
              "LokaOps membuat setiap percakapan customer berubah menjadi data yang bisa ditindaklanjuti."
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">LO</div>
              <span className="text-blue-100 text-sm font-medium">Tim LokaOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

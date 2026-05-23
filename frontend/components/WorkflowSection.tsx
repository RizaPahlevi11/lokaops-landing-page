const steps = [
  {
    num: "01",
    title: "Chat Masuk",
    desc: "Customer mengirim pesan WhatsApp. LokaOps mendeteksi percakapan baru secara otomatis.",
  },
  {
    num: "02",
    title: "Lead Tercatat",
    desc: "Nama, kontak, dan kebutuhan customer disimpan sebagai lead baru di dalam sistem.",
  },
  {
    num: "03",
    title: "AI Merangkum",
    desc: "AI membaca percakapan dan merangkum kebutuhan, budget, dan preferensi customer dalam satu klik.",
  },
  {
    num: "04",
    title: "Admin Follow-up",
    desc: "Reminder otomatis mengingatkan admin untuk follow-up sesuai jadwal yang sudah ditentukan.",
  },
  {
    num: "05",
    title: "Quotation Dikirim",
    desc: "Admin membuat dan mengirim quotation profesional langsung dari LokaOps tanpa perlu Word atau Excel.",
  },
  {
    num: "06",
    title: "Invoice Dibuat",
    desc: "Setelah deal, invoice dibuat dalam hitungan detik dengan data yang sudah tersimpan di sistem.",
  },
  {
    num: "07",
    title: "Owner Laporan",
    desc: "Dashboard real-time menampilkan semua data: jumlah lead, closing rate, dan total omzet.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            Alur Kerja
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Dari chat menjadi lead, follow-up,{" "}
            <span className="text-blue-600">penawaran, dan laporan.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base">
            Tujuh langkah sederhana yang mengubah percakapan biasa menjadi proses sales yang terstruktur.
          </p>
        </div>

        <div className="hidden lg:flex items-start gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex-1 relative flex flex-col items-center text-center px-2">
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100 z-0" />
              )}
              <div className="relative z-10 w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md mb-3">
                {i + 1}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">{s.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-blue-200 my-1" />}
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-[#0F172A] mb-1">{s.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

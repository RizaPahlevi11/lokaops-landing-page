import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Apakah LokaOps langsung membalas chat customer otomatis?",
    a: "Tidak. LokaOps adalah alat bantu untuk tim sales dan admin — bukan chatbot otomatis. AI kami membantu merangkum isi percakapan, menyiapkan template balasan yang siap dikirim, dan mengingatkan admin untuk follow-up. Manusia tetap yang membalas dan membangun hubungan dengan customer.",
  },
  {
    q: "Apakah harus terhubung ke WhatsApp Business API?",
    a: "Untuk plan Starter dan Growth, kamu bisa menginput data lead secara manual dari percakapan WhatsApp. Integrasi langsung dengan WhatsApp Business API tersedia di plan Business untuk bisnis yang ingin alur kerja lebih otomatis.",
  },
  {
    q: "Apakah cocok untuk bisnis kecil yang baru mulai?",
    a: "Sangat cocok. LokaOps dirancang agar mudah digunakan tanpa keahlian teknis. Plan Starter kami tersedia dengan harga terjangkau dan fitur yang cukup untuk bisnis kecil yang ingin mulai merapikan proses penjualan dari chat.",
  },
  {
    q: "Apakah bisa membuat penawaran dan invoice dalam format PDF?",
    a: "Ya. LokaOps mendukung pembuatan quotation dan invoice profesional dalam format PDF yang bisa langsung dikirimkan ke customer. Tersedia template yang bisa dikustomisasi dengan logo dan informasi bisnis kamu.",
  },
  {
    q: "Apakah owner bisa melihat performa sales tim?",
    a: "Ya. Owner mendapat akses ke dashboard khusus yang menampilkan total lead, jumlah follow-up, quotation yang terkirim, closing rate, dan estimasi omzet — semua dalam tampilan yang mudah dibaca tanpa perlu memahami data teknis.",
  },
  {
    q: "Apakah AI akan menggantikan pekerjaan admin?",
    a: "Tidak. AI LokaOps dirancang untuk membantu admin bekerja lebih cepat dan lebih rapi — bukan menggantikan mereka. Admin tetap menjadi jembatan utama antara bisnis dan customer. AI hanya mengambil alih pekerjaan repetitif seperti merangkum chat, menyiapkan template, dan mengirimkan reminder.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-4 mb-4 leading-tight">
            Pertanyaan yang{" "}
            <span className="text-blue-600">sering diajukan.</span>
          </h2>
          <p className="text-[#64748B] text-base">
            Tidak menemukan jawaban yang kamu cari? Hubungi kami langsung.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#0F172A] pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

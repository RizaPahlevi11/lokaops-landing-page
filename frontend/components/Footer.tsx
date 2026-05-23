import { MessageSquare } from "lucide-react";

const links = [
  {
    heading: "Produk",
    items: ["Fitur", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Perusahaan",
    items: ["Tentang Kami", "Blog", "Karir", "Partner"],
  },
  {
    heading: "Support",
    items: ["Dokumentasi", "Tutorial", "Status", "Hubungi Kami"],
  },
  {
    heading: "Legal",
    items: ["Syarat & Ketentuan", "Kebijakan Privasi", "Cookie Policy", "GDPR"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare size={16} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold">LokaOps</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              Platform AI CRM & Operations untuk bisnis yang mendapatkan customer dari chat. Ubah percakapan menjadi penjualan yang terukur.
            </p>
            <div className="flex gap-3">
              {["WA", "IG", "LI", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs text-slate-400 hover:text-white transition-colors font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {links.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-semibold mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 LokaOps. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Dibuat dengan ❤️ untuk bisnis Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}

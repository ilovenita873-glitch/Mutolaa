import { useState } from "react";
import {
  Search,
  Apple,
  Play,
  User,
  Headphones,
  BookOpen,
  RefreshCw,
} from "lucide-react";

// ─── HERO ──────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span className="text-orange-500">Mutolaa</span> vaqti keldi!
          </h1>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            Dastur bilan vaqtni tejang va maksimal qulaylikdan bahramand bo'ling
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Apple, label: "App Store" },
              { icon: Play, label: "Google Play" },
              { icon: BookOpen, label: "App Gallery" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white hover:border-orange-400 hover:shadow-md transition-all text-sm font-medium text-gray-800 shadow-sm"
              >
                <Icon size={18} className="text-gray-700" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 leading-none">Yuklab olish</div>
                  <div className="font-semibold text-sm">{label}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6 opacity-60">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Hamkorlar:</div>
            <div className="text-xs font-bold text-gray-700">YOSHLAR ISHLARI AGENTLIGI</div>
            <div className="text-xs font-bold text-gray-700">XalqBanki</div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-end min-h-[340px]">
          <div className="absolute right-0 top-0 w-72 h-72 bg-orange-400 rounded-3xl" />

          <div className="relative z-20 w-44 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mr-[-30px] mb-4">
            <div className="bg-gray-900 h-5 flex items-center justify-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full" />
            </div>
            <div className="p-3 bg-white">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 mb-3">
                <Search size={11} className="text-gray-400" />
                <span className="text-xs text-gray-400">Izlash</span>
              </div>
              <p className="text-[9px] text-gray-400">Assalomu alaykum,</p>
              <p className="text-[11px] font-bold text-gray-800 mb-2">Lola Ergasheva</p>
              <div className="flex gap-2 text-[8px] text-gray-500 mb-3">
                <span>Tarixiy (12)</span>
                <span>Hajviy (7)</span>
              </div>
              <div className="flex gap-2">
                {["Belkin qissalari", "Alkimyogar"].map((t) => (
                  <div key={t} className="flex-1 bg-gray-100 rounded-xl p-2 text-center">
                    <div className="w-full h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-1" />
                    <p className="text-[8px] font-medium text-gray-700 leading-tight">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="relative z-30 w-48 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-900 h-5 flex items-center justify-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full" />
            </div>
            <div className="p-3">
              <div className="w-full h-28 bg-gradient-to-br from-green-700 to-green-900 rounded-2xl mb-2 flex items-center justify-center">
                <span className="text-3xl">🐻</span>
              </div>
              <p className="text-[11px] font-bold text-gray-800">Dehqon bilan ayiq</p>
              <p className="text-[9px] text-gray-400 mb-2">Xalq og'zaki ijodi</p>
              <div className="grid grid-cols-3 gap-1 text-center mb-2">
                <div>
                  <p className="text-[9px] text-gray-400">Reyting</p>
                  <p className="text-[11px] font-bold text-gray-800">4.9</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400">Ovoz</p>
                  <p className="text-[11px] font-bold text-gray-800">🎧</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400">Yosh</p>
                  <p className="text-[11px] font-bold text-gray-800">10+</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button className="flex-1 bg-blue-500 text-white text-[8px] py-1.5 rounded-lg font-medium">E-kitob</button>
                <button className="flex-1 bg-orange-400 text-white text-[8px] py-1.5 rounded-lg font-medium">Audiokitob</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "4 666 965", label: "Foydalanuvchilar", bg: "bg-rose-400", icon: User },
  { value: "2 007", label: "Audiokitoblar", bg: "bg-orange-400", icon: Headphones },
  { value: "2 675", label: "Elektron kitoblar", bg: "bg-teal-400", icon: BookOpen },
  { value: "18 024 948", label: "O'qilayotgan kitoblar", bg: "bg-purple-500", icon: BookOpen },
  { value: "06.06.2026", label: "So'nggi yangilanish", bg: "bg-blue-500", icon: RefreshCw },
];

export function Stats() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map(({ value, label, bg, icon: Icon }) => (
          <div key={label} className={`${bg} rounded-2xl p-5 flex flex-col justify-between min-h-[110px]`}>
            <Icon size={22} className="text-white/80" />
            <div>
              <p className="text-white font-bold text-xl leading-tight">{value}</p>
              <p className="text-white/80 text-xs mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// ─── WHY MUTOLAA ───────────────────────────────────────────────────────────────
export function WhyMutolaa() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-orange-100 shadow-xl bg-gradient-to-br from-red-900 via-amber-800 to-red-950 flex items-center justify-center">
            <span className="text-8xl">👳</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Nega <span className="font-bold">Mutolaa?</span>
          </h2>
          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
            <p>Biz jadid bobomiz Mahmudxo'ja Behbudiydan ilhomlandik! U kishi 1908-yil Samarqand shahrida Mutolaaxona nomli kutubxonaga asos solganlar.</p>
            <p>"Mutolaa" loyihasi orqali 2023-yil yakuniga qadar 100 ga yaqin elektron va audio kitoblar ishlab chiqiladi. Ushbu jarayonga dublyaj ustalari, yozuvchi va shoirlar hamda malakali mutaxassislar jalb etiladi.</p>
            <p>2025-yilga qadar "Mutolaa" loyihasi orqali 1 mlndan ortiq kitobxon yoshlar kashf qilinadi. Kitobxonlikka oid mingdan ortiq audio va videomahsulot yaratiladi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VIDEO SECTION ─────────────────────────────────────────────────────────────
export function VideoSection() {
  const [played, setPlayed] = useState(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Bu platforma nima uchun mo'ljallangan?
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Ushbu videoni tomosha qilib platforma nima haqida ekanligini bilib olishingiz mumkin
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-md">
            Tomosha qilish
          </button>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div
            onClick={() => setPlayed(true)}
            className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group bg-gray-900"
          >
            <div className="w-full h-52 bg-gradient-to-br from-gray-800 to-gray-950 relative">
              <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <BookOpen size={14} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-bold">mutolaa</span>
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-tight">ELEKTRON VA</p>
                  <p className="text-white font-black text-lg leading-tight">AUDIOKITOBLARNING SIFATLI</p>
                  <div className="mt-1 bg-red-700 px-2 py-1 inline-block rounded">
                    <p className="text-white font-black text-sm">TIZIMLI VA BEPUL PLATFORMASI!</p>
                  </div>
                </div>
              </div>


              {!played ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-white fill-white ml-1" />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <p className="text-white text-sm">▶️ Video ijro etilmoqda...</p>
                </div>
              )}
            </div>

            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <BookOpen size={10} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 leading-none">Endi mutolaa qilish yanada qulay!</p>
                  <p className="text-[10px] text-gray-400">Mutolaa</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Play size={10} className="text-red-500" /> YouTube
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function MutolaaLanding() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <Stats />
      <WhyMutolaa />
      <VideoSection />
    </div>
  );
}

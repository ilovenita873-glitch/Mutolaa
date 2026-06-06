import {
  Headphones,
  BookMarked,
  TrendingUp,
  BookOpen,
  HelpCircle,
  Wand2,
  Crown,
  Check,
  Minus,
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Audiokitobni yuklab olish",
    desc: "Premium bilan audiokitoblarni qurilma xotirasiga saqlab oling",
  },
  {
    icon: BookMarked,
    title: "Mutolaaxonam",
    desc: "O'qilgan kitoblar, rejamdagi kitoblar, yuklangan kitoblar, javonlar bo'limlaridan foydalanish imkoniyatiga ega bo'ling",
  },
  {
    icon: TrendingUp,
    title: "Sizning faolligingiz",
    desc: "Mutolaa bilan birgalikda o'z faolligingizni kuzatib boring va yaxshilang",
  },
  {
    icon: BookOpen,
    title: "Premium kitoblar",
    desc: "Premium sizga barcha kitoblarga bo'lgan eshiklarni butunlay ochib beradi",
  },
  {
    icon: HelpCircle,
    title: "Kitob bo'yicha quiz",
    desc: "Kitobni o'qidingizmi yoki uqdingizmi? Tekshirib ko'rishga nima deysiz?",
  },
  {
    icon: Wand2,
    title: "Tovushbezak funksiyasi",
    desc: "Tovushbezak funksiyasi orqali audiokitoblar eshitishni yanada zavqli qiladi",
  },
];

const rows: { label: string; free: boolean; premium: boolean }[] = [
  { label: "Online mutolaa", free: true, premium: true },
  { label: "Elektron kitoblarni yuklab olish", free: true, premium: true },
  { label: "Videokitob", free: true, premium: true },
  { label: "Tanlovlarda ishtirok etish", free: true, premium: true },
  { label: "Audiokitobni yuklab olish", free: false, premium: true },
  { label: "Sizning faolligingiz", free: false, premium: true },
  { label: "Mutolaaxonam", free: false, premium: true },
  { label: "Premium kitoblar", free: false, premium: true },
  { label: "Kitob bo'yicha quiz", free: false, premium: true },
  { label: "Tovushbezak", free: false, premium: true },
];

function CheckGray() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-neutral-600">
      <Check size={13} className="text-neutral-500" />
    </span>
  );
}

function CheckOrange() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500">
      <Check size={13} className="text-white" />
    </span>
  );
}

function DashMark() {
  return <span className="inline-block w-5 h-0.5 bg-neutral-600 rounded" />;
}

export default function Premium() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">

      {/* ── HERO ── */}
      <div className="flex flex-col items-center pt-12 pb-8 px-4 text-center">
        <div className="w-[72px] h-[72px] rounded-2xl bg-orange-500 flex items-center justify-center mb-6 shadow-lg">
          <Crown size={36} className="text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Mutolaa Premium xususiyatlari
        </h1>
      </div>

      {/* ── FEATURES GRID ── */}
      <div className="max-w-4xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#1f1510] border border-[#3a2010] flex items-center justify-center mb-4">
              <Icon size={24} className="text-orange-500" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* ── DIVIDER ── */}
      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-neutral-800 mb-10" />
      </div>


      {/* ── COMPARE TABLE ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left text-neutral-400 font-medium py-3 px-4 w-1/2">
                Funksiyalar
              </th>
              <th className="text-center text-white font-medium py-3 px-4 w-1/4">
                Mutolaa bepul
              </th>
              <th className="text-center font-medium py-3 px-4 w-1/4">
                <span className="text-white">Mutolaa </span>
                <span className="text-orange-500">Premium</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, free, premium }, i) => (
              <tr
                key={label}
                className={`border-t border-neutral-800 hover:bg-white/[0.03] transition-colors ${
                  i === rows.length - 1 ? "border-b border-neutral-800" : ""
                }`}
              >
                <td className="py-4 px-4 text-neutral-300">{label}</td>
                <td className="py-4 px-4 text-center">
                  {free ? <CheckGray /> : <DashMark />}
                </td>
                <td className="py-4 px-4 text-center">
                  {premium ? <CheckOrange /> : <DashMark />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── CTA ── */}
      <div className="flex flex-col items-center pb-16 pt-4 gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold text-base px-10 py-3 rounded-full shadow-md">
          Premium olish
        </button>
        <p className="text-xs text-neutral-500">Istalgan vaqt bekor qilish mumkin</p>
      </div>

    </div>
  );
}


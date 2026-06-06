import { useParams } from "react-router-dom";

export const news = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    title: "Yangi kitoblar platformaga qo‘shildi",
    date: "04.06.2026",
    category: "Yangilik",
    content: "Birinchi yangilik matni...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Mutolaa Premium yangilandi",
    date: "03.06.2026",
    category: "Premium",
    content: "Ikkinchi yangilik matni...",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
    title: "Eng ko‘p o‘qilgan kitoblar",
    date: "02.06.2026",
    category: "Kitob",
    content: "Uchinchi yangilik matni...",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Yangi texnologiyalar sharhi",
    date: "01.06.2026",
    category: "Texnologiya",
    content: "To'rtinchi yangilik matni...",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    title: "Mutolaa tavsiya qilgan asarlar",
    date: "30.05.2026",
    category: "Kitob",
    content: "Beshinchi yangilik matni...",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    title: "Eng yaxshi gadjetlar",
    date: "28.05.2026",
    category: "Gadjet",
    content: "Oltinchi yangilik matni...",
  },
];

export default function NewsDetail() {
  const { id } = useParams();

  const article = news.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return <h1>Yangilik topilmadi</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto pt-28 px-4">

      <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
        <span>Home</span>
        <span>›</span>
        <span>Latest news</span>
        <span>›</span>
        <span className="text-amber-500">⭐</span>
        <span>{article.title}</span>
      </div>

      <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
        <span className="font-semibold text-black">
          {article.category}
        </span>
        <span>|</span>
        <span>{article.date}</span>
        <span>|</span>
        <span>14:34</span>
        <span>|</span>
        <span>2-minute read</span>
      </div>

      <h1 className="text-5xl font-bold mb-8">
        ⭐ {article.title}
      </h1>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[550px] object-cover"
        />
      </div>

      <div className="mt-10 text-lg text-gray-700 leading-9">
        <p>{article.content}</p>

        <p className="mt-6">
          Ushbu loyiha yoshlar orasida kitobxonlikni rivojlantirish
          va zamonaviy texnologiyalar orqali bilim olishni
          osonlashtirish maqsadida tashkil etilgan.
        </p>

        <p className="mt-6">
          Tadbir davomida yangi imkoniyatlar va platforma
          yangilanishlari haqida ma'lumot berildi.
        </p>
      </div>
    </div>
  );
}
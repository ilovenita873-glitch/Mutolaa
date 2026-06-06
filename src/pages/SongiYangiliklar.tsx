import { Link } from "react-router-dom";

type NewsCardProps = {
  image: string;
  title: string;
  date: string;
  category: string;
};

function SongiYangiliklar({ image, title, date, category }: NewsCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>

          <span className="text-gray-400 text-sm">
            {date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 leading-7 group-hover:text-emerald-600 transition">
          {title}
        </h3>

        <button className="mt-4 text-emerald-600 font-semibold">
          Batafsil →
        </button>
      </div>
    </div>
  );
}

export default function LatestNews() {
const news = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    title: "Yangi kitoblar platformaga qo‘shildi",
    date: "04.06.2026",
    category: "Yangilik",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Mutolaa Premium yangilandi",
    date: "03.06.2026",
    category: "Premium",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
    title: "Eng ko‘p o‘qilgan kitoblar",
    date: "02.06.2026",
    category: "Kitob",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Yangi texnologiyalar sharhi",
    date: "01.06.2026",
    category: "Texnologiya",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    title: "Mutolaa tavsiya qilgan asarlar",
    date: "30.05.2026",
    category: "Kitob",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    title: "Eng yaxshi gadjetlar",
    date: "28.05.2026",
    category: "Gadjet",
  },
];
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          So'nggi yangiliklar
        </h2>

        <button className="text-emerald-600 font-semibold">
          Barchasi →
        </button>
      </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {news.map((item) => (
    <Link key={item.id} to={`/news/${item.id}`}>
      <SongiYangiliklar {...item} />
    </Link>
  ))}
</div>
    </section>
  );
}
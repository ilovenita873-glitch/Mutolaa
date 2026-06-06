import {
  BookOpen,
  Headphones,
  Star,
} from "lucide-react";
import MutolaaLanding from "../components/Hero";

export default function Home() {
  const books = [
    {
      title: "Jinlar bazmi",
      author: "Abdulla Qodiriy",
      image: "https://picsum.photos/300/450?1",
      rating: 4.7,
    },
    {
      title: "Odam bo'lish qiyin",
      author: "O'lmas Umarbekov",
      image: "https://picsum.photos/300/450?2",
      rating: 4.9,
    },
    {
      title: "A'lochi xo'rozcha",
      author: "Anvar Obidjon",
      image: "https://picsum.photos/300/450?3",
      rating: 4.8,
    },
    {
      title: "Dahshat",
      author: "Abdulla Qahhor",
      image: "https://picsum.photos/300/450?4",
      rating: 4.8,
    },
    {
      title: "Garov",
      author: "Anton Chexov",
      image: "https://picsum.photos/300/450?5",
      rating: 4.9,
    },
    {
      title: "Asror bobo",
      author: "Abdulla Qahhor",
      image: "https://picsum.photos/300/450?6",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-orange-500 p-3 text-white">
                  <BookOpen size={24} />
                </div>

                <h1 className="text-4xl font-bold text-white">
                  mutol<span className="text-orange-500">aa</span>
                </h1>
              </div>

              <h2 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
                Audio va
                <span className="block text-orange-500">
                  elektron kitoblar
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg text-slate-300">
                O'zbek tilidagi eng katta elektron kutubxona.
                Minglab kitoblarni istalgan joyda o'qing,
                tinglang va zavqlaning. Mutolaa platformasi
                elektron va audiokitoblarni taqdim etadi. :contentReference[oaicite:0]</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Google Play
                </button>

                <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                  App Store
                </button>

                <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                  App Gallery
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-[40px] bg-white p-4 shadow-2xl">
                <img
                  src="https://picsum.photos/600/900"
                  alt="Mutolaa"
                  className="h-[600px] rounded-[30px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              Ommabop kitoblar
            </h2>

            <button className="font-medium text-orange-500">
              Barchasi →
            </button>
          </div>


          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {books.map((book) => (
              <div
                key={book.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 font-semibold">
                    {book.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {book.author}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <BookOpen
                        size={16}
                        className="text-blue-500"
                      />
                      <Headphones
                        size={16}
                        className="text-orange-500"
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm font-medium">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-[#0f172a] p-10 text-white lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold">
                  Mutolaa ilovasini yuklab oling
                </h2>

                <p className="mt-4 text-slate-300">
                  Elektron va audiokitoblarni bir joyda
                  o'qing hamda tinglang. :contentReference[oaicite:1]
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-orange-500 px-6 py-3">
                    Google Play
                  </button>

                  <button className="rounded-xl border border-slate-500 px-6 py-3">
                    App Store
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://picsum.photos/500/700"
                  alt="phone"
                  className="h-[450px] rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import MutolaaLanding from "../components/Hero";

const team = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Sirojiddin Olimov",
    position: "CEO",
    about: "Mutolaa loyihasi asoschisi va rahbari.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Sa'dullo Quronov",
    position: "Senior Editor",
    about: "Kitoblar tahriri va kontent sifati uchun mas'ul.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Javlon Jovliyev",
    position: "Senior Editor",
    about: "Elektron kitoblar tahriri bilan shug'ullanadi.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Orif Tolib",
    position: "Head of Electronic Books",
    about: "Elektron kitoblar bo'limi rahbari.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Asilbek Xalilov",
    position: "Principal Engineer",
    about: "Platforma backend va frontend dasturchisi.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Hurliman Jumamuratova",
    position: "Manager",
    about: "Loyihalarni boshqarish va rejalashtirish bilan shug'ullanadi.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Jasurbek Anvarov",
    position: "Head of Digital Marketing",
    about: "Marketing strategiyalari uchun javobgar.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Shohsanam Xolboyeva",
    position: "Head of Audio Books",
    about: "Audio kitoblar bo'limi rahbari.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Husanjon Jo'raboyev",
    position: "Designer",
    about: "UI/UX va grafik dizayn bilan shug'ullanadi.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Rustamov Yusuf",
    position: "Multimedia Specialist",
    about: "Video va multimedia kontentlarini tayyorlaydi.",
  },
];

type TeamMemberProps = {
  image: string;
  name: string;
  position: string;
  about: string;
};

function TeamMember({
  image,
  name,
  position,
  about,
}: TeamMemberProps) {
  return (
    <div className="group relative bg-white rounded-3xl p-3 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">

      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover rounded-2xl"
      />

      <div className="text-center py-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>

      {/* Hover */}
      <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
        <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-emerald-500">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold">{name}</h3>

        <span className="text-emerald-600 font-semibold mt-1 mb-4">
          {position}
        </span>

        <p className="text-gray-600 text-sm leading-6">
          {about}
        </p>

        <button className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
          Batafsil
        </button>
      </div>
    </div>
  );
}

const LoyihaHaqida = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-2">
      <MutolaaLanding/>

      <div className="max-w-7xl mx-auto px-4 mt-2">
        <h1 className="text-5xl font-bold text-center mb-14">
          Meet our team
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoyihaHaqida;
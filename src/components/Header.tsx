import { useState, type ReactNode } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
         
          <div className="flex items-center gap-3">
            <Link to="/home">
            <img
              src={logo}
              alt="Mutolaa"
              className="h-10 object-contain"
            />
            </Link>
          </div>
          <nav className=" lg:flex items-center gap-8 text-[15px]">
            <select>
  <option value="premium">👑Premium</option>
  <option value="hikoya">📑Hikoya</option>
  <option value="raman">⭐Roman</option>
  <option value="sher">🪶sher</option>
  <option value="qisqa">💡qisqa</option>
  <option value="rivojlanish">👤Rivojlanish</option>
  <option value="folklor">🎤Folklro</option>
  <option value="balalar">👶🏻Bolalar</option>
</select>
           <NavLink to="/loyihahaqida">Loyiha-Haqida</NavLink>
           <NavLink to="/songiyangiliklar">Songi-Yangiliklar</NavLink>
           <NavLink to="/premium">Premium</NavLink>
           <NavLink to="/donat">Donat</NavLink>
          </nav>

          <div className="hidden md:block w-[420px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Kitob qidirish..."
                className="w-full bg-gray-100 rounded-full py-3 px-5 pl-12 outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <svg
                className="absolute left-4 top-3.5 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50">
              Kirish
            </button>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t p-4 space-y-3 bg-white">
          <a href="#" className="block text-emerald-600 font-medium">
            Kutubxona
          </a>

          <a href="#" className="block text-gray-600">
            Audio kitoblar
          </a>

          <a href="#" className="block text-gray-600">
            Mualliflar
          </a>

          <a href="#" className="block text-gray-600">
            Premium
          </a>
        </div>
      )}
    </header>
    
    </div>
  );
}
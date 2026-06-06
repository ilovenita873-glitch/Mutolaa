import React from 'react';
import tellrasm from '../assets/tellrasm.png'
import apple from '../assets/LogoApple.png'
import playmarket from '../assets/playmarket.png'
import galary from '../assets/Appgalary.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";



interface FooterLink {
  title: string;
  href: string;
}

export const Footer: React.FC = () => {
  
 

  const footerLinks: FooterLink[] = [
    { title: 'Loyiha haqida', href: '#' },
    { title: 'Bizning jamoa', href: '#' },
    { title: 'Biz bilan aloqa', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#0d0d0d] text-gray-300 pt-16 pb-8 px-6 md:px-16 lg:px-24 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-zinc-800 pb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ilovani platformalardan yuklab oling
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
              Mobil ilovamizni qurilmangizda mavjud platformadan bemalol yuklab olishingiz mumkin
            </p>
            
            <div className="flex flex-wrap gap-4">

              <a href="#" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl transition-all duration-200">
                <img src={apple} className="fa-solid fa-bag-shopping text-xl text-red-500" alt="" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">Download on the</p>
                  <p className="text-sm font-bold -mt-0.5">App Store</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl transition-all duration-200">
                <img src={playmarket} className="fa-solid fa-bag-shopping text-xl text-red-500" alt="" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">GET IT ON</p>
                  <p className="text-sm font-bold -mt-0.5">Google Play</p>
                </div>
              </a>

              <a href={galary} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl transition-all duration-200">
                <img src={galary} className="fa-solid fa-bag-shopping text-xl text-red-500" alt="" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">EXPLORE IT ON</p>
                  <p className="text-sm font-bold -mt-0.5">AppGallery</p>
                </div>
              </a>
            </div>
          </div>


          <div className="flex justify-center lg:justify-end overflow-hidden h-64 lg:h-auto">
            <img 
              src={tellrasm} 
              alt="Mutolaa ilovasi ko'rinishi" 
              className="w-500 max-w-md object-contain object-bottom select-none pointer-events-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-6">

          <div className="flex items-center gap-2.5 text-2xl font-bold text-white tracking-wide">
            <span className="text-[#f97316] text-3xl">
              <i className="fa-solid fa-book-open"></i>
            </span>
            <span className="text-[#f97316] lowercase font-extrabold">mutolaa</span>
          </div>
          
          <nav>
            <ul className="flex flex-wrap gap-6 md:gap-10 text-white font-semibold text-base">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-[#f97316] transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-zinc-800 my-2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
          
          <div className="space-y-3.5 text-sm font-semibold text-white">
            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-phone text-[#f97316]"></i>
              <a href="tel:+998773590100" className="hover:underline">+998 77 359 01 00</a>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot text-[#f97316] mt-0.5"></i>
              <span>Alisher Navoiy 11A, Toshkent sh</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot text-[#f97316] mt-0.5"></i>
              <span>Mustaqillik 7, Toshkent sh</span>
            </div>
          </div>

          <div className="flex justify-start lg:justify-center gap-3">
           <button  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#f97316] text-zinc-400 hover:text-white transition-all duration-200 flex items-center justify-center text-lg"><a href="https://t.me/hahahahellomonkeys"><FaTelegram /></a></button>
           <button  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#f97316] text-zinc-400 hover:text-white transition-all duration-200 flex items-center justify-center text-lg"><a href="https://www.youtube.com/watch?v=Zob4a6SitZQ"><FaInstagram /></a></button>
           <button  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#f97316] text-zinc-400 hover:text-white transition-all duration-200 flex items-center justify-center text-lg"><a href="https://www.youtube.com/watch?v=vzSU8bRpfdk"><GiMonkey /></a></button>
           <button  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#f97316] text-zinc-400 hover:text-white transition-all duration-200 flex items-center justify-center text-lg"><a href="https://www.youtube.com/watch?v=XqZsoesa55w"><FaYoutube /></a></button>
          </div>

          <div className="text-zinc-500 text-sm lg:text-right font-medium tracking-wide">
            &copy;2026. “Mutolaaxona” MCHJ. Barcha huquqlar himoyalangan.
          </div>

        </div>

      </div>
    </footer>
  );
};

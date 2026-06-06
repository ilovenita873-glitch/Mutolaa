import { useState } from "react";

const Donat = () => {  
  const [name, setName] = useState("");
const [type, setType] = useState("Mutolaa");
const [amount, setAmount] = useState("");
const [showModal, setShowModal] = useState(false)
const handleSubmit = () => {
  console.log(name, type, amount);
  setShowModal(true)
  setName("");
  setType("Mutolaa");
  setAmount("");
};
  const amounts = [
    "10000",
    "15000",
    "20000",
    "25000",
    "30000",
    "40000",
    "50000",
    "100000",
  ];

  const donations = [
    { name: "Behzod", amount: "10 000 UZS", time: "12 hours ago" },
    { name: "Xurshid", amount: "50 000 UZS", time: "21 hours ago" },
    { name: "Sharapat", amount: "5 000 UZS", time: "2 days ago" },
    { name: "Axmedova", amount: "10 000 UZS", time: "2 days ago" },
    { name: "Akobir", amount: "10 000 UZS", time: "2 days ago" },
    { name: "Avazbek", amount: "10 000 UZS", time: "2 days ago" },
  ];

  return (
    <div className="bg-[#f7f7f7] min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-gray-500 mb-10">
          <span>Home</span>
          <span>›</span>
          <span>Donation</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold mb-5">Donation</h1>

            <p className="text-gray-600 text-xl mb-12 leading-8">
              Support Mutolaa. Your contribution will help us continue this
              service and add even more books.
            </p>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-3 text-lg">
                  Full name <span className="text-red-500">*</span>
                </label>

                <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
   className="w-full h-16 px-5 rounded-2xl border border-gray-200 bg-white outline-none"
/>

              </div>

              <div>
                <label className="block mb-3 text-lg">
                  Hissa turi <span className="text-red-500">*</span>
                </label>

                <select
  value={type}
  onChange={(e) => setType(e.target.value)} className="w-full h-16 px-5 rounded-2xl border border-gray-200 bg-white outline-none">
                  <option>Mutolaa</option>
                  <option>Kitoblar</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>

            {/* Amount */}
            <div className="mt-8">
              <label className="block mb-3 text-lg">
                Amount <span className="text-red-500">*</span>
              </label>

              <div className="relative">
               
                <input
  type="number"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  placeholder="0"
  className="w-full h-16 px-5 rounded-2xl border border-gray-200 bg-white outline-none"
/>

                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl font-bold">
                  UZS
                </span>
              </div>
            </div>

            {/* Amount buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
              {amounts.map((item) => (
                <button
                  key={item}
                  onClick={() => setAmount(item)}
                  className="h-12 rounded-xl bg-white border border-gray-200 hover:bg-orange-50 hover:border-orange-400 transition font-medium"
                >
                  {Number(item).toLocaleString()} UZS
                </button>
              ))}
            </div>

            {/* Payment */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <button className="h-20 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition">
                <span className="text-4xl font-bold">
                  <span className="text-[#3c3c3c]">Pay</span>
                  <span className="text-[#31c6d4]">me</span>
                </span>
              </button>

              <button className="h-20 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition text-[#00A7E7] text-4xl font-black">
                CLICK
              </button>
            </div>

            {/* Support */}
            <button onClick={handleSubmit} className="w-full mt-8 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-xl shadow-lg shadow-orange-200 transition" >
              💳 Support
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] h-fit">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-4xl font-bold">
                Last Donations
              </h2>

              <div className="text-6xl">
                🎁
              </div>
            </div>

            <div className="space-y-1">
              {donations.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 py-5 border-b border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    🤍
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">
                      {item.name}
                    </h3>

                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-2xl">
                        {item.amount}
                      </span>

                      <span className="text-gray-500">
                        • {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white w-[420px] rounded-3xl p-8 shadow-2xl text-center animate-[fadeIn_.3s_ease]">
      
      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
        <span className="text-4xl">✅</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Muvaffaqiyatli yuborildi!
      </h2>

      {/* Description */}
      <p className="text-gray-500 leading-7 mb-8">
        Xayriyangiz muvaffaqiyatli qabul qilindi.
        Mutolaa loyihasini qo'llab-quvvatlaganingiz uchun rahmat.
      </p>

      {/* Button */}
      <button
        onClick={() => setShowModal(false)}
        className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold text-lg transition"
      >
        Yopish
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Donat;
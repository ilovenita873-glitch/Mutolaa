import { Route, Routes } from "react-router-dom";
import LoyihaHaqida from "./pages/LoyihaHaqida";
import SongiYangiliklar from "./pages/SongiYangiliklar";
import Premium from "./pages/Premium";
import Donat from "./pages/Donat";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import NewsDetail from "./Detail/NewsDetail";

const App = () => {
  return (
    <>
      <Header />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<LoyihaHaqida />} />
          <Route path="/loyihahaqida" element={<LoyihaHaqida />} />
          <Route path="/songiyangiliklar" element={<SongiYangiliklar />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/donat" element={<Donat />} />
          <Route path="/home" element={<Home />} />

          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
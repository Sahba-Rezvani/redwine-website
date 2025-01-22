import "../App.css";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

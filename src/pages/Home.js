import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// import { Main } from "./Main";
// import MainBanner from "./Banner";
// import ImageMenu from "./ImageMenu";
// import { LimitedEdition } from "./LimitedEdition";
// import { Discount } from "./Discount";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Main } from "../components/Main";

export default function Home({ products }) {
  return (
    <>
      <Main products={products} />
    </>
  );
}

import MainBanner from "./Banner";
import { Discount } from "./Discount";
import ImageMenu from "./ImageMenu";
import { LimitedEdition } from "./LimitedEdition";

export function Main({ products }) {
  return (
    <main>
      <MainBanner />
      <ImageMenu />
      <Discount />
      <LimitedEdition products={products} />
    </main>
  );
}

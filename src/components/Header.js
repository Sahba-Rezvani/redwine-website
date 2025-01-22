import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header>
      <div className="logo">logoooo</div>
      <Menu />
      <div className="header-tools">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-box" />
        <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
        <FontAwesomeIcon icon={faUser} className="profile" />
      </div>
    </header>
  );
}

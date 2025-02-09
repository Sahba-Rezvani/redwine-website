import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./Menu";

export function Header({ toggleShoppingBagDrawer, toggleLoginDrawer }) {
  return (
    <header>
      <div className="logo">logoooo</div>
      <Menu />
      <div className="header-tools">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-box" />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="shopping-cart"
          onClick={toggleShoppingBagDrawer()}
        />
        <FontAwesomeIcon
          icon={faUser}
          className="profile"
          onClick={toggleLoginDrawer()}
        />
      </div>
    </header>
  );
}

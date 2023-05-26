import { CartWidget } from "../../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="logoimg"
        src="./img/logo-almohada.png"
        alt="Logo"
        width={300}
      />
      <ul className="categorias">
        <li>
          <button>TODAS</button>
        </li>
        <li>
          <button>COMBOS</button>
        </li>
        <li>
          <button>FAMILIARES</button>
        </li>
        <li>
          <button>HOTELERAS</button>
        </li>
        <li>
          <button>INTELIGENTES</button>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/" className="Link">
          Home
        </Link>
        <Link to="/about" className="Link">
          About
        </Link>
        <Link to="/contact" className="Link">
          Contact
        </Link>
      </ul>
      <ul className="Cart">
        <li >
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import "./Navbar.css";
import { Button } from "@mui/material";
import { CartWidget } from "../../common/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            className="logoImg"
            src="https://firebasestorage.googleapis.com/v0/b/gm-motors-c1596.firebasestorage.app/o/gm-motors-logo.png?alt=media&token=b9651e39-01e0-4e7d-8a66-b2a0e36e1a88"
            alt="Logo"
            style={{ padding: "10px" }}
          />
        </Link>
        <div className="boxButtons">
          <ul className="categorias">
            <Link className="btnCategory" to="/">
              <Button className="buttonNav" color="inherit" variant="contained">
                TODOS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/cascos">
              <Button className="buttonNav" color="inherit" variant="contained">
                CASCOS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/camperas">
              <Button className="buttonNav" color="inherit" variant="contained">
                CAMPERAS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/guantes">
              <Button className="buttonNav" color="inherit" variant="contained">
                GUANTES
              </Button>
            </Link>
          </ul>
          <div className="boxCartIcon">
            <CartWidget className="btnCart" />
          </div>
        </div>
      </div>
    </>
  );
};

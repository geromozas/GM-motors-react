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
            src="https://firebasestorage.googleapis.com/v0/b/gm-motors-c1596.firebasestorage.app/o/gm-motors-logo.png?alt=media&token=238e4219-afca-40c7-a1d2-bc30956b62ef"
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
          <div className="boxCart">
            <CartWidget className="btnCart" />
          </div>
        </div>
      </div>
    </>
  );
};

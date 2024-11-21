import { Badge } from "@mui/material";
import { useContext, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const [contador, setContador] = useState(0);

  const { TotalItemsCart } = useContext(CartContext);
  let totalProduct = TotalItemsCart();

  return (
    <div className="cart" style={{ padding: 20 }}>
      <Link to="/carrito">
        <Badge badgeContent={totalProduct} showZero color="primary">
          <BsFillCartFill color="white" size="40px" />
        </Badge>
      </Link>
      {/* <h2>{contador}</h2> */}
    </div>
  );
};

import { Badge } from "@mui/material";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="cart" style={{ padding: "20px" }}>
      <Link to="/carrito">
        <Badge badgeContent={4} color="primary">
          <BsFillCartFill color="black" size="40px" />
        </Badge>
      </Link>
      {/* <h2>{contador}</h2> */}
    </div>
  );
};

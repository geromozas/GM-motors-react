import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="cart">
      <BsFillCartFill color="black" size="40px" />
      <h2>{contador}</h2>
    </div>
  );
};

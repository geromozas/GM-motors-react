import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeProduct } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <button onClick={clearCart}>Limpiar carrito</button>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={() => removeProduct(product.id)}>-</button>
          </div>
        );
      })}
    </div>
  );
};

// import { useNavigate } from "react-router-dom";

// export const CartContainer = () => {
//   const navigate = useNavigate();

//   const realizarCompra = () => {
//     console.log("se compraron los productos");
//     //navigate
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>Carrito</h1>
//       <button onClick={realizarCompra}>Comprar</button>
//     </div>
//   );
// };

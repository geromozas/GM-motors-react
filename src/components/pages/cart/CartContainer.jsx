import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeProduct, TotalPrice } =
    useContext(CartContext);

  let total = TotalPrice();

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que desea limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se vacio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se ha vaciado el carrito", "", "info");
      }
    });
  };

  return (
    <div className="productCart-1">
      <h2>Total: ${total}</h2>
      <button className="carritoVacio" onClick={clear}>
        Limpiar carrito
      </button>
      {cart.map((product) => {
        return (
          <div className="prodCart" key={product.id}>
            <img src={product.img} className="imgCart" alt="" />
            <div>
              <h2>{product.name}</h2>
              <div className="textCartContainer">
                <div>
                  <h3>${product.price}</h3>
                  <h3>Cantidad: {product.quantity}</h3>
                </div>
                <button
                  className="btnEliminar"
                  onClick={() => removeProduct(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
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

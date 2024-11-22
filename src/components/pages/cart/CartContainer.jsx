import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se vacio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se ha vaciado el carrito", "", "info");
      }
    });
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="carritoVacio">
          <h2>Upsss... Parece que tu carrito esta vacio...</h2>
          <Link to="/">
            <Button variant="contained">Seguir comprando</Button>
          </Link>
        </div>
      ) : (
        <div className="productCart-1">
          {cart.map((product) => {
            return (
              <div className="prodCart" key={product.id}>
                <img src={product.img} className="imgCart" alt="" />
                <div>
                  <h2>{product.name}</h2>
                  <div className="textCartContainer">
                    <div>
                      <h5>{product.category}</h5>
                      <h3>${product.price}</h3>
                      <div className="boxCantElimi">
                        <h3 className="cantidad">
                          Cantidad: {product.quantity}
                        </h3>
                        <Button
                          variant="contained"
                          className="btnEliminar"
                          onClick={() => removeProduct(product.id)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {cart.length > 0 && (
        <div className="btn-carrito">
          <Button variant="contained" className="btn-carrito-2" onClick={clear}>
            Limpiar carrito
          </Button>
          <h2>Total: ${total}</h2>
          <Link to="/checkout">
            <Button variant="contained" className="btn-carrito-2">
              Finalizar compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

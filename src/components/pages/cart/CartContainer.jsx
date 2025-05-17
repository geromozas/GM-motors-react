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
        <div className="boxCart">
          {cart.map((product) => {
            return (
              <div className="prodCart" key={product.id}>
                <img src={product.img} className="imgCart" alt={product.name} />
                <div className="productCartInfo">
                  <h3 className="productTitle">{product.title}</h3>
                  <h4 className="productPrice">
                    {Number(product.price).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </h4>
                  <h4 className="productQuantity">
                    Cantidad: {product.quantity}
                  </h4>
                </div>
                <Button
                  variant="contained"
                  className="btnEliminar"
                  onClick={() => removeProduct(product.id)}
                  sx={{ marginTop: 5 }}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
      )}
      {cart.length > 0 && (
        <div className="btn-carrito">
          <Button variant="contained" onClick={clear}>
            Limpiar carrito
          </Button>
          <h2 className="totalPrice">
            Total:{" "}
            {Number(total).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h2>
          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

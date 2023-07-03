import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ItemDetail } from "./ItemDetail";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const amount = getTotalQuantityById(+id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se ha agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let productFind = products.find((product) => product.id === Number(id));
    const getProduct = new Promise((res) => {
      res(productFind);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ItemDetail
      amount={amount}
      productSelected={productSelected}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  );
};

import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const amount = getTotalQuantityById(+id);
  console.log("la cantidad es: ", amount);

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
    />
  );
};

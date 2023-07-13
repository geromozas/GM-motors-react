import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ItemDetail } from "./ItemDetail";
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
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
    let itemCollecion = collection(database, "products");
    let refDoc = doc(itemCollecion, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
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

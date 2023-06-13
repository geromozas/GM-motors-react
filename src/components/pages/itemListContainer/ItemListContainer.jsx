import { useEffect, useState } from "react";
import { ItemListContainerPresentacional } from "./ItemListContainerPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);
  return <ItemListContainerPresentacional items={items} />;
};

// export const ItemListContainer = ({ greeting }) => {
//   return (
//     <>
//       {/* <h1>{greeting}</h1> */}
//     </>
//   );
// };

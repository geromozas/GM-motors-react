import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Box, CircularProgress } from "@mui/material";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items.length);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 1000);
    });

    tarea.then((respuesta) => setItems(respuesta));
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
    </div>
  );
};

// export const ItemListContainer = ({ greeting }) => {
//   return (
//     <>
//       {/* <h1>{greeting}</h1> */}
//     </>
//   );
// };

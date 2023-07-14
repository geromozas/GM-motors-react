import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Box, CircularProgress } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(database, "products");

    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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

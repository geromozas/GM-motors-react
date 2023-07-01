import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="itemContainer">
        <Button variant="contained" size="small" onClick={decrement}>
          -
        </Button>
        <input type="number" value={count} readOnly />
        <Button variant="contained" size="small" onClick={increment}>
          +
        </Button>
        <Button
          className="{useStyles}"
          variant="contained"
          size="small"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

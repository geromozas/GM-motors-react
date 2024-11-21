import { Button, TextField } from "@mui/material";
import { useCount } from "../hooks/useCount";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="itemContainer">
        <div className="boxIncremetDecrement">
          <button className="buttonDecrement" onClick={decrement}>
            -
          </button>
          <TextField
            className="boxNumber"
            variant="outlined"
            aria-readonly
            value={count}
            sx={{ width: 40 }}
          />
          <button className="buttonIncrement" onClick={increment}>
            +
          </button>
        </div>
        <Button
          className="agregar"
          variant="contained"
          size="small"
          onClick={() => onAdd(count)}
          sx={{ width: 70, fontSize: 10 }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

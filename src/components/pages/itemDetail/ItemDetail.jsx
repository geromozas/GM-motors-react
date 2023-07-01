import { ItemCount } from "../../ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ productSelected, addToCart, amount }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(data);
  };

  return (
    <>
      <div className="item-flex">
        <img src={productSelected.img} alt="" />
        <div className="item-right">
          <h2>{productSelected.name}</h2>
          <h5>categoria: {productSelected.category}</h5>
          <p>
            <span>${productSelected.price}</span>
          </p>

          {productSelected.stock > 0 ? (
            <ItemCount
              stock={productSelected.stock}
              initial={amount}
              onAdd={onAdd}
            />
          ) : (
            <h2 style={{ fontSize: "15px", color: "grey" }}>No hay stock</h2>
          )}
        </div>
      </div>
    </>
  );
};

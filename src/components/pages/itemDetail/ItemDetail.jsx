import { ItemCount } from "../../ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ productSelected, amount, onAdd }) => {
  return (
    <>
      <div className="item-flex">
        <img src={productSelected.img} alt="" />
        <div className="item-right">
          <h2 style={{ textTransform: "upperCase" }}>
            {productSelected.title}
          </h2>
          <h6>categoria: {productSelected.category}</h6>
          <div className="boxDescriptionText">
            <p className="details">{productSelected.description}</p>
          </div>
          <p className="boxPrice">
            <span>
              {Number(productSelected.price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </span>
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

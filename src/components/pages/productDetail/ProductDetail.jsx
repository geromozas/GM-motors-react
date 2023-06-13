import { ItemCount } from "../../ItemCount";

export const ProductDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>
      <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
    </>
  );
};

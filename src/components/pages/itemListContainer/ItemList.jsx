import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
export const ItemList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

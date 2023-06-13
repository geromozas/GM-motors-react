import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
export const ItemListContainerPresentacional = ({ items }) => {
  return (
    <div className="cards">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

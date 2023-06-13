import "./App.css";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="custom-background">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" />
            <Route
              path="/productDetail/:id"
              element={<ProductDetailContainer />}
            />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* // greeting={"Envios gratis y rápidos ⚡ a toda la Argentina"} */
}

import "./App.css";
import { menuRoutes } from "./routes/menuRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <div className="custom-background">
      <BrowserRouter>
        <CartContextComponent>
          <Routes>
            <Route element={<Layout />}>
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;

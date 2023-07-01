//crear un contexto
import { createContext, useState } from "react";

export const CartContext = createContext();

//creo el componente proveedor del contexto, a travez de este componente voy a poner a dispocision de mi aplicación
const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    let exist = cartExist(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const cartExist = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let stayProduct = cart.filter((product) => product.id !== id);
    setCart(stayProduct);
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((prod) => prod.id === +id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeProduct,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextComponent;

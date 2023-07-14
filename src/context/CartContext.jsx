import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    let product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  const TotalItemsCart = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const TotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeProduct,
    getTotalQuantityById,
    TotalItemsCart,
    TotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextComponent;

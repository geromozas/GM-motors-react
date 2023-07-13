import { CartContainer } from "../components/pages/cart/CartContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import FormContainer from "../components/pages/form/FormContainer";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: FormContainer,
  },
];

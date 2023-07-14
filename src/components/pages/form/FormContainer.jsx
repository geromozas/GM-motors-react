import Form from "./Form.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../../firebaseConfig.js";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import Swal from "sweetalert2";

const FormContainer = () => {
  const { cart, TotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let total = TotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      repeatEmail: "",
      celular: "",
    },
    onSubmit: (datos) => {
      let order = {
        buyer: datos,
        items: cart,
        total: total,
      };

      let orderCollection = collection(database, "orders");
      addDoc(orderCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(database, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validationOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      apellido: Yup.string().required("Campo obligatorio"),
      email: Yup.string()
        .required("Campo obligatorio")
        .email("No corresponde a un email invalido"),
      repeatEmail: Yup.string()
        .required("Campo obligatorio")
        .oneOf([Yup.ref("email")], "Los emails no coinciden"),
      celular: Yup.number("Numero invalido").required("Campo obligatorio"),
    }),
  });

  return (
    <div>
      {orderId ? (
        Swal.fire(
          "!Su compra fue exitosa, muchas gracias por confiar en Sleep Good¡",
          `Su numero de seguimineto es: ${orderId}`,
          "success"
        ).then(() => {
          window.location.href = "/";
        })
      ) : (
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormContainer;
// <div className="compraExitosa">
//   <h1>
//     !Su compra fue exitosa, muchas gracias por confiar en Sleep Good¡
//   </h1>
//   <h4>ID: {orderId}</h4>
// </div>

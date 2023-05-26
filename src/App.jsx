import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting={"Envios gratis y rápidos ⚡ a toda la Argentina"}
      />
    </>
  );
}

export default App;

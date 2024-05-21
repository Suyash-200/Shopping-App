import { useState } from "react";
import Header from "./Componants/Header";

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <>
      <Header/>
    </>
  );
}

export default App;

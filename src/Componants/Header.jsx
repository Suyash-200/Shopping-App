import { useContext, useState } from "react";
import Model from "./Model";
import { CartContext, ModelCartContext } from "../store/cart-context";

export default function Header() {
  const {totalLength} = useContext(CartContext);
  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <ModelCartContext.Provider value={{
      closeModel
    }}>
      {showModel && <Model></Model>}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={() =>handleModel()}>Cart({totalLength})</button>
        </p>
      </header>
    </ModelCartContext.Provider>
  );
}

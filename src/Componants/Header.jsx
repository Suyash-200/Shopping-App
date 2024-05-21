import { useState } from "react";
import Model from "./Model";

export default function Header() {
  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <div>
      {showModel && <Model cart={closeModel}></Model>}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleModel}>Cart</button>
        </p>
      </header>
    </div>
  );
}

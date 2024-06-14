import { useEffect, useState } from "react";
import Header from "./Componants/Header";
import Shop from "./Componants/Shop";
import { CartContext } from "./store/cart-context";
import DUMMY_PRODUCTS from "./dummy-products";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  function getCartData() {
    setShoppingCart(DUMMY_PRODUCTS);
  }

  useEffect(() => {
    getCartData();
  }, []);

  const total = shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${total.toFixed(2)}`

  const totalLength = shoppingCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  useEffect(() => {
    if (shoppingCart.length > 0) {
      setTotalPrice(total);
    }
  });

  function addItem(itemid) {
    const itemInCart = shoppingCart.find(
      (cartItem, index) => cartItem.id === itemid
    );
    if (itemInCart) {
      setShoppingCart(
        shoppingCart.map((cartItem, index) =>
          cartItem.id === itemid
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setShoppingCart([...shoppingCart, { ...itemid, quantity: 1 }]);
    }
  }

  function removeItem(itemid) {
    const itemInCart = shoppingCart.find(
      (cartItem, index) => cartItem.id === itemid
    );

    if (itemInCart.quantity === 1) {
      setShoppingCart(
        shoppingCart.filter((cartItem, index) => cartItem.id !== itemid)
      );
    } else {
      setShoppingCart(
        shoppingCart.map((cartItem, index) => {
          if (cartItem.id === itemid) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return { ...cartItem };
          }
        })
      );
    }
  }

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        addItem,
        removeItem,
        formattedTotalPrice,
        totalLength,
      }}
    >
      <Header />
      <Shop />
    </CartContext.Provider>
  );
}

export default App;

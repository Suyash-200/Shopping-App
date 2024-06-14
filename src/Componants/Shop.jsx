import { useContext } from "react"
import { CartContext } from "../store/cart-context"

export default function Shop(){
   const {shoppingCart,addItem} = useContext(CartContext);
    return (
      <section id="shop">
        <h2>Elegant Clothing For Everyone</h2>
        <ul id="products">
          {shoppingCart.map((data,index) => (
            <li key={data.id}>
              <div className="product">
                <img src={data.image} alt={data.title} />
                <div className="product-content">
                  <div>
                    <h3>{data.title}</h3>
                    <p className="product-price">${data.price}</p>
                    <p>{data.description}</p>
                  </div>
                  <p className="product-actions">
                    <button onClick={() => addItem(data.id)}>Add to Cart</button>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
}
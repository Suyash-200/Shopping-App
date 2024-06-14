import { useContext , useEffect } from "react"
import { CartContext, ModelCartContext } from "../store/cart-context"

export default function ModelData (){
    const {shoppingCart, formattedTotalPrice, addItem, removeItem} = useContext(CartContext)
    const {closeModel} = useContext(ModelCartContext)

    useEffect(()=>{
      console.log(shoppingCart)
    },[])
    return (
      <div id="cart">
          <ul id="cart-items">
           {shoppingCart.map((item,index) =>
           item.quantity !== 0 ?
            <li key={item.id}>
            <div>
              <span>{item.title}</span>
              
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeItem(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addItem(item.id)}>
                +
              </button>
            </div>
          </li> : null
          )}
          </ul>
        <p id="cart-total-price">
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
        <form id="modal-actions">
          <button onClick={closeModel}>Close</button>
        </form>
      </div>
    );
}
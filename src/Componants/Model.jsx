export default function Model({cart}) {
  return (
    <div id="modal">
      <dialog id="modal" open>
        <h2>Your Cart</h2>
        <div id="cart">
          <p>{}</p>
          <p id="cart-total-price">{}</p>
        </div>
        <form id="model-actions">
            <button onClick={cart}>close</button>
        </form>
      </dialog>
    </div>
  );
}

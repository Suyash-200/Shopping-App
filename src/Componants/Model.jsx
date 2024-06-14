import ModelData from "./ModelData";

export default function Model() {
  return (
    <>
      <dialog id="modal" open>
        <h2>Your Cart</h2>
        <ModelData/>
      </dialog>
    </>
  );
}

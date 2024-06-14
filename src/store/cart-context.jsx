import { createContext } from "react";
import  DUMMY_PRODUCTS  from "../dummy-products";


export const CartContext = createContext({
    shoppingCart : [],
    addItem: () =>{},
    removeItem :() =>{}
});

export const ModelCartContext = createContext({
    closeModel : () =>{}
})
import { createContext } from "react";

const CartContext = createContext({
    items: [],
    quantity: 0,
    total_amount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;
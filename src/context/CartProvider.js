import { useReducer } from "react";
import CartContext from "./CartContext";

const default_cart_state = {
    items: [],
    quantity: 0,
    total_amount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    resetCartHandler: () => {}
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const existingItemInd = state.items.findIndex((item) => item.id === action.item.id)
        
        // If the item is already in the cart
        if(existingItemInd != -1){
            const item = action.item;
            item['itemQuantity']++;

            const total_amount = state.total_amount + parseInt(item.discounted_price.replaceAll(',', ''));

            const updatedItems = state.items;
            updatedItems.splice(existingItemInd, 1, item);
            const updatedTotalAmont = total_amount;
            const updatedQuantity = state.quantity + 1;

            return {
                items: updatedItems,
                quantity: updatedQuantity,
                total_amount: updatedTotalAmont
            }
        }
        // If the item is not in the cart
        else{
            const item = action.item;
            item['itemQuantity'] = 1;

            const total_amount = state.total_amount + parseInt(item.discounted_price.replaceAll(',', ''));

            const updatedItems = state.items.concat(item);
            const updatedTotalAmont = total_amount;
            const updatedQuantity = state.quantity + 1;

            return {
                items: updatedItems,
                quantity: updatedQuantity,
                total_amount: updatedTotalAmont
            }
        }
    }
    else if (action.type === 'REMOVE') {
        const existingItemInd = state.items.findIndex((item) => item.id === action.id)
        
        if(existingItemInd != -1){
            const updatedItems = state.items;
            const updatedQuantity = state.quantity - 1;
            const updatedTotalAmont = state.total_amount - parseInt(state.items[existingItemInd]['discounted_price'].replaceAll(',', ''));
            if(state.items[existingItemInd].itemQuantity === 1){
                updatedItems.splice(existingItemInd, 1);
            }
            else{
                updatedItems[existingItemInd].itemQuantity--;
            }

            return {
                items: updatedItems,
                quantity: updatedQuantity,
                total_amount: updatedTotalAmont
            }
        }
        else{
            return {
                ...state
            }
        }
        
    }
    else if(action.type === 'RESET') {
        return default_cart_state;
    }
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, default_cart_state);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    }

    const resetCartHandler = (id) => {
        dispatchCartAction({ type: 'RESET'});
    }

    return <CartContext.Provider value={{
        ...cartState,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        resetCart: resetCartHandler
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
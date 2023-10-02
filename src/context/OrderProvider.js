import { useContext, useReducer } from "react";
import OrderContext from "./OrderContext";

const default_order_state = {
    cancelOrder: ()=>{},
    placeOrder: ()=>{},
    // orderDate: '',
    // deliveryDate: '',
    // orderTotal: '',
    orderedItems: [],
    // deliveryAddress: ''
};

const orderReducer = (state, action)=>{
    if(action.type === 'CANCEL'){
        const updatedOrderList = state.orderedItems.filter((item) => {return item.id != action.id});

        return {
            ...state,
            orderedItems: updatedOrderList
        }
    }
    else if(action.type === 'PLACE'){
        const updatedOrderList = state.orderedItems.concat(action.item);
        return {
            ...state,
            orderedItems: updatedOrderList
        }
    }
}

const OrderProvider = ()=>{

    const [orderState, dispatchOrderReducer] = useReducer(orderReducer, default_order_state);

    const placeOrderHandler = (data)=>{
        dispatchOrderReducer({type: 'PLACE', data: data});
    }

    const cancelOrderHandler = (id)=>{
        dispatchOrderReducer({type: 'CANCEL', id: id});
    }

    return <OrderContext.Provider value={{
         ...orderState,
         placeOrder: placeOrderHandler,
         cancelOrder: cancelOrderHandler
         }}>
        {props.children}
    </OrderContext.Provider>
}

export default OrderProvider;
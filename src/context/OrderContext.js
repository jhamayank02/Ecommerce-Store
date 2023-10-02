import { useContext } from "react";

const OrderContext = useContext({
    cancelOrder: ()=>{},
    placeOrder: ()=>{},
    // orderDate: '',
    // deliveryDate: '',
    // orderTotal: '',
    orderedItems: [],
    // deliveryAddress: ''
});

export default OrderContext;
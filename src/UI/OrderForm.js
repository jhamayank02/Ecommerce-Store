import './OrderForm.css';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';

const OrderForm = (props)=>{

    const ctx = useContext(CartContext);

    const [hasOrdered, setHasOrdered] = useState(false);

    const formSubmitHandler = (e)=>{
        e.preventDefault();

        setHasOrdered(true);    
        ctx.resetCart();
    }

    return <Modal  onClick={props.hideOrderForm}>
    { !hasOrdered &&  <div className='order-page'>
        <form>
            <h2>Order Form</h2>
            <div>
            <label>First Name</label>
                <input required type='text' name='fname' /> 
            </div>
            <div>
            <label>Last Name</label>
                <input required type='text' name='lname' /> 
            </div>
            <div>
            <label>Email Id</label>
                <input required type='email' name='email' /> 
            </div>
            <div>
            <label>Address</label>
                <textarea required rows={7} type='text' name='address' /> 
            </div>
            <PrimaryButton btnText="Order" onClick={formSubmitHandler} />
            <SecondaryButton btnText="Close" onClick={props.hideOrderForm} />
        </form>
    </div>}


    {hasOrdered && <div className='order-submitted'>
        <p>Your order has been successfully placed.</p>
        <SecondaryButton btnText="Close" onClick={props.hideOrderForm} />
    </div>}
</Modal>
}

export default OrderForm;
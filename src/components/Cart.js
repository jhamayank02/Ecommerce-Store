import '../css/Cart.css';
import Modal from '../UI/Modal';
// import img from '../assets/images/img1.jpg';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = (props)=>{

    const ctx = useContext(CartContext);
    const cart_items = ctx.items;
    console.log(ctx.total_amount)

    const trimTitle = (title)=>{
        return title.length > 50 ? title.substring(0,50) + '...' : title;
    }
    

    return <Modal onClick={props.hideCartModal}>
        <div className='cart'>
            <h2>Your Cart</h2>

            {cart_items.length === 0 && <p className='empty-cart'>Your cart is empty.</p>}

            {cart_items.length > 0 && <div className='cart-items'>
                {cart_items.map((item)=>{
                    return <li>
                    <div className='row'>
                        <div className='product-name'>{trimTitle(item.product_name)}</div>
                        <div className='discounted-price'>₹{item.discounted_price}</div>
                        <div className='original-price'>₹{item.original_price}</div>
                        <div className='quantity'>Quantity : {item.itemQuantity}</div>
                        <div className='actions'>
                            <SecondaryButton btnText="+" onClick={() => ctx.addItem(item)} />
                            <SecondaryButton btnText="-" onClick={() => ctx.removeItem(item.id)} />
                        </div>
                    </div>
                    <div className='row'>
                        <img src={require(`../Data/Product Images/${item.image}`)} />
                    </div>
                </li>
                })}
                
                <div className='order-total'>Order Total : ₹{ctx.total_amount}</div>

            </div>}

            <div className='actions'>
            {cart_items.length > 0 && <PrimaryButton btnText="Order"  onClick={() => props.showOrderForm(cart_items)}/>}
                <SecondaryButton btnText="Close" onClick={props.hideCartModal} />
            </div>
        </div>
    </Modal>
}

export default Cart;
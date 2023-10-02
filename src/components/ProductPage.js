import '../css/ProductPage.css';
import NoPage from '../UI/NoPage';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

function ProductPage(props) {
    const [addedToCart, setAddedToCart] = useState(false);

    const ctx = useContext(CartContext);

    const location = useLocation();
    const data = location.state;

    if(data == null){
        return <NoPage />
    }
    
    const {product_name, original_price, discounted_price, image, description, specifications} = data;

    const specification_keys = specifications.map((item)=>{
        return Object.keys(item)[0]
    });
    const specification_values = specifications.map((item)=>{
        return Object.values(item)[0]
    });

    const buyNowHandler = (data)=>{
        ctx.addItem(data);
        props.showCartModal();
    }


    const addToCartHandler = (data)=>{
        setAddedToCart(true);

        ctx.addItem(data);
    }

    const removeFromCartHandler = (id)=>{
        const itemInd = ctx.items.findIndex((item) => item.id === id)
        const itemQuantity = ctx.items[itemInd].itemQuantity;

        if(itemQuantity === 1){
            setAddedToCart(false);
        }
        ctx.removeItem(id);
    }

  return (
    <div className="product-page">
        <div className="left-container">
            <img src={require(`../Data/Product Images/${image}`)} />
            <div className='actions'>
                <PrimaryButton btnText="Buy Now" onClick={() => buyNowHandler(data)}/>
                {!addedToCart && <SecondaryButton btnText="Add To Cart" onClick={() => addToCartHandler(data)} />}
                {addedToCart && <SecondaryButton btnText="-" onClick={() => removeFromCartHandler(data.id)} />}
                {addedToCart && <SecondaryButton btnText="+" onClick={() => addToCartHandler(data)} />}
            </div>
        </div>

        <div className='product-details right-container'>
            <div className='title'>{product_name}</div>
            <div className='ratings'>
                <span className='rating-badge'>4.4</span>
                <span className='rating-review-count'>12,300</span>
            </div>
            <div className='price-details'>
                <div className='discounted-price'>₹{discounted_price}</div>
                <div className='original-price'>₹{original_price}</div>
            </div>

            <div className='product-desc'>
                <span>Description : </span>
                <span>{description}.</span>
            </div>

            <div className='product-specifications'>
                <h2>Specifications</h2>

                <div className='specification-list'>
                        {specification_keys.map((value, ind)=>{
                            return <div key={ind}>
                                <li key={ind}>
                                    <div>{value}</div>
                                    <div>{specification_values[ind]}</div>
                                </li>
                                <div className='separator'></div>
                            </div>
                        })}
                    </div>
            </div>

            <div className='actions'>
                <PrimaryButton btnText="Buy Now" onClick={()=>buyNowHandler(data)} />
                {!addedToCart && <SecondaryButton btnText="Add To Cart" onClick={() => addToCartHandler(data)} />}
                {addedToCart && <SecondaryButton btnText="-" onClick={() => removeFromCartHandler(data.id)} />}
                {addedToCart && <SecondaryButton btnText="+" onClick={() => addToCartHandler(data)} />}
            </div>

            <div className='ratings-reviews'>
                <h2>Ratings and Reviews</h2>

                <div className='ratings-reviews-container'>
                    <div className='rating-review'>
                        <div>
                            <span className='rating-badge'>4.4</span>
                            <span className='date'>19 sep 2023</span>
                        </div>
                        <div>
                            Wonderful item, must purchase.
                        </div>
                        <div className='separator'></div>
                    </div>
                    <div className='rating-review'>
                        <div>
                            <span className='rating-badge'>4.4</span>
                            <span className='date'>19 sep 2023</span>
                        </div>
                        <div>
                            Wonderful item, must purchase.
                        </div>
                        <div className='separator'></div>
                    </div>
                    <div className='rating-review'>
                        <div>
                            <span className='rating-badge'>4.4</span>
                            <span className='date'>19 sep 2023</span>
                        </div>
                        <div>
                            Wonderful item, must purchase.
                        </div>
                        <div className='separator'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage
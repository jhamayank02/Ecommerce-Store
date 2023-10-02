import './ProductCard.css';
// import img from '../assets/images/img1.jpg';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

    const{
        product_name, specifications, original_price, discounted_price, image
    } = props.data;

    const specification_keys = specifications.map((item) => {
        return Object.keys(item)[0]
    })
    const specification_values = specifications.map((item) => {
        return Object.values(item)[0]
    })

    const navigate = useNavigate();

    const openProductPageHandler = ()=>{
        navigate('/product', {state: props.data});
    }
    
  return (
    <div className="product-card" onClick={openProductPageHandler}>
        <div><img src={require('../Data/Product Images/' + image)} /></div>

        <div className='specifications'>
            <div className='title'>{product_name}</div>
            <div className='ratings'>
                <span className='rating-badge'>4.4</span>
                <span className='rating-review-count'>12,300</span>
            </div>
            <ul className='features'>
                {
                    specification_keys.map((item, ind) => {
                        return <li key={ind}>{item}: {specification_values[ind].substring(0,50)}</li>
                    })
                }
            </ul>
            <div className='price-details'>
                <div className='discounted-price'>₹​{discounted_price}</div>
                <div className='original-price'>₹​{original_price}</div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard
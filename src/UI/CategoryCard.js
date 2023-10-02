import './css/CategoryCard.css';
import { useNavigate } from "react-router-dom";

function CategoryCard(props) {

  const {product_name, original_price, discounted_price, image} = props.data;

  const trimTitle = (title)=>{
    return title.length > 30 ? title.substring(0,30) + '...' : title;
  }

  const navigate = useNavigate();

  const viewProduct = ()=>{
    navigate("/product", {state: props.data});
  }

  return (
    <div className="category-card" onClick={viewProduct}>
        <img src={require(`../Data/Product Images/${image}`)} />
        <div className='title'>{trimTitle(product_name)}</div>
        
        <div className='price-details'>
            <div className='discounted-price'>₹{original_price}</div>
            <div className='original-price'>₹{discounted_price}</div>
        </div>

        <div className='ratings'>
                <span className='rating-badge'>4.4</span>
                <span className='rating-review-count'>12,300</span>
        </div>
    </div>
  )
}

export default CategoryCard
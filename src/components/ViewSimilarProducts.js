import { useLocation } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import '../css/ViewSimilarProducts.css'

function ViewSimilarProducts() {
    const location = useLocation();
    const data = location.state;
    
    const product_arr = Object.values(data)[0];
    
    return  <>
        <div className="view-similar-page">
            {product_arr.map((item)=>{
                return <ProductCard key={item.id} data={item}></ProductCard>
            })}
        </div>
        </>
}
export default ViewSimilarProducts;
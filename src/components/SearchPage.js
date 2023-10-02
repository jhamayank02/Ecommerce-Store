import { useLocation } from "react-router-dom";
import DUMMY_DATA from "../Data/DUMMY_DATA";
import ProductCard from "../UI/ProductCard";
import '../css/SearchPage.css'

const SearchPage = ()=>{

    const location = useLocation();
    const searchTxt = location.state;

    const result = [];
    
    let i = 0;
    for(i; i<DUMMY_DATA.length; i++){
        const obj = DUMMY_DATA[i];
        const item = Object.keys(obj);
        
        if(item.toString().toLowerCase().includes(searchTxt.toLowerCase()) === true){
            const key = item[0];
            const arr = Object.values(DUMMY_DATA[i][key]);
            result.push(...arr);
        }
    }

    if(result.length === 0){
        i = 0;
        for(i; i<DUMMY_DATA.length; i++){
            const obj = DUMMY_DATA[i];
            const item = Object.keys(obj);
            const key = item[0]
            const arr = Object.values(DUMMY_DATA[i][key])

            let j = 0;
            for(j; j<arr.length; j++){
                if(arr[j].product_name.toLowerCase().includes(searchTxt.toLowerCase())){
                    result.push(arr[j]);
                }
            }
        }
    }

    return  <>
        <div className="search-page">
            {result.length === 0 &&
                <p className="not-found">No results found for <span>"{searchTxt}"</span></p>
            }

            {result.length > 0 && result.map((item)=>{
                return <ProductCard data={item}></ProductCard>
            })}
        </div>
        </>

}

export default SearchPage;
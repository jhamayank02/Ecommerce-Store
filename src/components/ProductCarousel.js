import { useRef, useState, useEffect } from 'react';
import CategoryCard from '../UI/CategoryCard';
import '../css/ProductCarousel.css';
import { useNavigate } from 'react-router-dom';

function ProductCarousel(props) {

  const product_arr = Object.values(props.data)[0];
  const category = product_arr[0]['category'];

  const ProductCarouselRef = useRef();

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const navigate = useNavigate();

  const showBtns = ()=>{
    const showPrev = ProductCarouselRef.current.scrollLeft > 0;
    const showNext = (ProductCarouselRef.current.scrollLeft < ProductCarouselRef.current.scrollWidth - ProductCarouselRef.current.offsetWidth);
    
    setPrevBtnEnabled(showPrev);
    setNextBtnEnabled(showNext);
  }
  
  const prevClickHandler = ()=>{
    (ProductCarouselRef).current.scrollLeft -= 200;
    showBtns();
  }
  
  const nextClickHandler = ()=>{
    (ProductCarouselRef).current.scrollLeft += 200;
    showBtns();
  }

  const viewSimilarHandler = ()=>{
    navigate('/view-similar', {state: props.data});
  }

  useEffect(() => {
    showBtns();
  }, [])
  

  return (
    <div className='product-carousel'>
        <h2>{category}</h2>

        {prevBtnEnabled && <div className='prevBtn' onClick={prevClickHandler}>&lt;</div>}
        {nextBtnEnabled && <div className='nextBtn' onClick={nextClickHandler}>&gt;</div>}

        <div className='products' ref={ProductCarouselRef}>
          {product_arr.map((item, ind)=>{
            return <CategoryCard key={ind} data={item} />
          })}
        </div>

        <div className='moreBtn' onClick={viewSimilarHandler}>View Similar</div>
    </div>
  )
}

export default ProductCarousel;
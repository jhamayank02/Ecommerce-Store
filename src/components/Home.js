import '../css/Home.css';
import Carousel from "./Carousel";
import ProductCarousel from './ProductCarousel';
import DUMMY_DATA from '../Data/DUMMY_DATA';

function Home() {
  return (
    <>
    <Carousel />
    {DUMMY_DATA.map((item, ind)=>{
      return <ProductCarousel key={ind} data={item} />
    })}
    </>
  )
}

export default Home
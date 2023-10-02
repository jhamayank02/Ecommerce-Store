import '../css/Carousel.css';
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'
import { useEffect } from 'react';

function Carousel(){

  const runSlides = ()=>{  
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');

    setInterval(() => {
      if(getComputedStyle(c1).display === 'block'){
        c1.style.display = 'none';
        c2.style.display = 'block';
      }
      else if(getComputedStyle(c2).display === 'block'){
        c2.style.display = 'none';
        c3.style.display = 'block';
      }
      else if(getComputedStyle(c3).display === 'block'){
        c3.style.display = 'none';
        c1.style.display = 'block';
      }
    }, 4000);
    }
  useEffect(() => {
    runSlides();
  }, [])
  
  

  return (
    <div className='carousel'>
        {/* <div id='slide'></div> */}
        <div id='c1'></div>
        <div id='c2'></div>
        <div id='c3'></div>
    </div>
  )
}

export default Carousel;
import '../css/Footer.css';

const Footer = ()=>{
    return(
        <div className="footer">
            
            <div className="section">
                <div className='footer-navigation'>
                    <li><a>Home</a></li>
                    <li><a>Contact us</a></li>
                    <li><a>About us</a></li>
                </div>
                <div className='vertical-separator'></div>
                <div className='categories'>
                    <li><a>Electronics</a></li>
                    <li><a>Footwears</a></li>
                    <li><a>Clothings</a></li>
                    <li><a>Smartphones</a></li>
                    <li><a>Laptops</a></li>
                </div>
                <div className='vertical-separator'></div>
                <div className='address'>
                    Plot no. 832, ABCD, New Town, Outside Earth, 101010, Mars
                </div>
            </div>
            
            <div className='horizontal-separator'></div>

            <div className="section">
                MCart || Some rights reserved &copy; 2023-2024
            </div>

        </div>
    );
}

export default Footer;
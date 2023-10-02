import { useContext, useState } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import '../css/Header.css';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const navigate = useNavigate();
    const ctx = useContext(CartContext);

    const [searchText, setSearchText] = useState('');

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
    }

    const searchHandler = () => {
        if (searchText !== '') {
            navigate('/search', { state: searchText });
        }
    }

    const toggleMenu = () => {
        const responsiveNav = document.getElementsByClassName('responsive-nav')[0];
        const hamburgerBtn = document.getElementById('hamburger-btn');

        if (responsiveNav.style.display === 'flex') {
            responsiveNav.style.display = 'none';
            hamburgerBtn.innerText = '☰';
        }
        else {
            responsiveNav.style.display = 'flex';
            hamburgerBtn.innerText = 'x';
        }
    }

    return (
        <>
            <nav>
                <div className="logo"><Link to='/'>MCart</Link></div>

                <div className="left-align">
                    <div className="search-box">
                        <input size="40" name="search" placeholder="Search for products, brands and more" value={searchText} onChange={searchTextHandler}></input>
                        <SecondaryButton btnText="Search" onClick={(e) => searchHandler()} />
                    </div>

                    <div className="account-section">
                        {!props.hasLoggedIn && <PrimaryButton btnText="Login" onClick={props.showLoginModal} />}
                        {props.hasLoggedIn && <PrimaryButton btnText="Logout" onClick={props.logoutHandler} />}
                    </div>

                    <div className="cart-icon">
                        {props.hasLoggedIn && <SecondaryButton btnText={"Cart " + ctx.quantity} onClick={props.showCartModal} />}
                    </div>

                </div>
                <div className='hamburger-icon' id='hamburger-btn' onClick={toggleMenu}>☰</div>


                <div className='responsive-nav'>
                    {!props.hasLoggedIn && <div onClick={props.showLoginModal}>Login</div>}
                    {props.hasLoggedIn && <div onClick={props.logoutHandler}>Logout</div>}
                    {props.hasLoggedIn && <div onClick={props.showCartModal}>{"Cart " + ctx.quantity}</div>}
                    <div className="res-search-box">
                        <input size="25" name="search" placeholder="Search for products, brands and more" value={searchText} onChange={searchTextHandler}></input>
                        <div className='res-search-btn' onClick={(e) => { searchHandler(); toggleMenu(); }}>Search</div>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Header;
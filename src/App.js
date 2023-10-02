import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage';
import NoPage from './UI/NoPage';
import OrderForm from './components/OrderForm';
import Logout from './components/Logout';
import SearchPage from './components/SearchPage';
import ViewSimilarProducts from './components/ViewSimilarProducts';

function App() {

  const [loginModalIsShown, setLoginModalIsShown] = useState(false);

  const showLoginModal = ()=>{
    setLoginModalIsShown(true);
  }

  const hideLoginModal = ()=>{
    setLoginModalIsShown(false);
  }

  const [logoutModalIsShown, setLogoutModalIsShown] = useState(false);

  const showLogoutModal = ()=>{
    setLogoutModalIsShown(true);
  }

  const hideLogoutModal = ()=>{
    setLogoutModalIsShown(false);
  }

  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  const loginHandler = (e)=>{
      e.preventDefault();

      setHasLoggedIn(true);
  }

  const logoutHandler = (e)=>{
      e.preventDefault();

      setHasLoggedIn(false);
      setLogoutModalIsShown(true);
  }

  const [signupModalIsShown, setSignupModalIsShown] = useState(false);

  const showSignupModal = ()=>{
    setLoginModalIsShown(false);
    setSignupModalIsShown(true);
  }

  const hideSignupModal = ()=>{
    setSignupModalIsShown(false);
  }

  const [cartIsShown, setCartlIsShown] = useState(false);

  const showCartModal = ()=>{
    setLoginModalIsShown(false);
    setSignupModalIsShown(false);
    setCartlIsShown(true);
  }

  const hideCartModal = ()=>{
    setCartlIsShown(false);
  }

  const [orderFormIsShown, setOrderFormIsShown] = useState(false);
  
  const showOrderForm = ()=>{
    setLoginModalIsShown(false);
    setSignupModalIsShown(false);
    setCartlIsShown(false);
    setOrderFormIsShown(true);
  }

  const hideOrderForm = ()=>{
    setOrderFormIsShown(false);
  }

  return (
    <>
    <div>

          {loginModalIsShown && <Login loginHandler={loginHandler} hasLoggedIn={hasLoggedIn} hideLoginModal={hideLoginModal} showSignupModal={showSignupModal} />}
          {signupModalIsShown && <SignUp hideSignupModal={hideSignupModal} />}
          {cartIsShown && <Cart hideCartModal={hideCartModal} showOrderForm={showOrderForm} />}
          {orderFormIsShown && <OrderForm hideOrderForm={hideOrderForm} />}
          {logoutModalIsShown && <Logout hideLogoutModal={hideLogoutModal} />}

      <BrowserRouter>
      <Header showLoginModal={showLoginModal} showCartModal={showCartModal} hasLoggedIn={hasLoggedIn} logoutHandler={logoutHandler} showLogoutModal={showLogoutModal}/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product" element={<ProductPage showCartModal={showCartModal} />} />
        <Route exact path="/search" element={<SearchPage />}></Route>
        <Route exact path="/view-similar" element={<ViewSimilarProducts />}></Route>
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
      <Footer />
    </>
  );
}

export default App;

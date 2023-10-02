import Modal from '../UI/Modal';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import '../css/Login.css';

const Login = (props)=>{

    const {hasLoggedIn, loginHandler} = props;

    return <Modal onClick={props.hideLoginModal}>
    {!hasLoggedIn && <div className='login-page'>
        <form>
            <h2>Login</h2>
            <div>
               <label>Email Id</label>
                <input type='email' name='email' required />
            </div>
            <div>
               <label>Password</label>
                <input type='password' name='password' required /> 
            </div>
            <div className='signup' onClick={props.showSignupModal}>Don't have an account?</div>
            <PrimaryButton btnText="Login" type={"submit"} onClick={loginHandler} />
            <SecondaryButton btnText="Close" onClick={props.hideLoginModal} />
        </form>
    </div>}


    {hasLoggedIn && <div className='logged-in'>
        <p>You have been successfully logged in.</p>
        <SecondaryButton btnText="Close" onClick={props.hideLoginModal} />
    </div>}
    </Modal>
}

export default Login;
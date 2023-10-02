import Modal from '../UI/Modal';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import '../css/SignUp.css';
import { useState } from 'react';

const SignUp = (props)=>{

    const [hasSignedUp, setHasSignedUp] = useState(false);

    const formSubmitHandler = (e)=>{
        e.preventDefault();

        setHasSignedUp(true);
    }

    return <Modal  onClick={props.hideSignupModal}>
    {!hasSignedUp && <div className='signup-page'>
    <form>
        <h2>Sign Up</h2>
        <div>
           <label>First Name</label>
            <input required type='text' name='fname' /> 
        </div>
        <div>
           <label>Last Name</label>
            <input required type='text' name='lname' /> 
        </div>
        <div>
           <label>Email Id</label>
            <input required type='email' name='email' /> 
        </div>
        <div>
           <label>Password</label>
            <input required type='password' name='password' /> 
        </div>
        <div>
           <label>Confirm Password</label>
            <input required type='password' name='password' /> 
        </div>
        <PrimaryButton btnText="Sign Up" onClick={formSubmitHandler} />
        <SecondaryButton btnText="Close" onClick={props.hideSignupModal}/>
    </form>
</div>}


{hasSignedUp && <div className='signed-up'>
        <p>Your account has been created successfully.</p>
        <SecondaryButton btnText="Close" onClick={props.hideSignupModal} />
    </div>}
</Modal>
}

export default SignUp;
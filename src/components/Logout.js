import Modal from "../UI/Modal";
import SecondaryButton from "../UI/SecondaryButton";

const Logout = (props)=>{
    return <Modal onClick={props.hideLogoutModal}>
        <p>You have been successfully logged out.</p>
        <SecondaryButton btnText="Close" onClick={props.hideLogoutModal} />
    </Modal>
}

export default Logout;
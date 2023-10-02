import Modal from "../UI/Modal";
import PrimaryButton from "../UI/PrimaryButton";

const OrdersPage = (props)=>{
    return (
        <Modal onClick={props.hideOrdersModal}>
          <div className="orders-page">
            <div className="orders">
                
            </div>

            <div className="actions">
                <PrimaryButton btnText="Close" onClick={props.hideOrdersModal} />
            </div>
            </div>  
        </Modal>
        
    )
}

export default OrdersPage;
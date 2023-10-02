import './css/PrimaryButton.css';

function PrimaryButton(props) {
  return (
    <button className='btn btn-primary' type={props.type} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default PrimaryButton
import './SecondaryButton.css';

function SecondaryButton(props) {
  return (
    <button className='btn btn-secondary' type={props.type} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default SecondaryButton
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const clickHandler = () => {
    props.onGetError(false);
  };

  const ModalContents = () => {
    return (
      <div className={classes.modal_background}>
        <div className={classes.modal}>
          <p>Please input valid value.</p>
          <button onClick={clickHandler}>confirm</button>
        </div>
      </div>
    );
  };

  return(
    ReactDOM.createPortal(<ModalContents></ModalContents>, document.querySelector('#modal'))
  )
  
};

export default Modal;

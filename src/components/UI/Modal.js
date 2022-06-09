import { Fragment } from 'react';
import ReactDOM from 'react-dom'; // Here we import Portal method

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
    );
};

const portalElement = document.getElementById('overlays'); // Place where we portal Backdrop and ModalOverlay components

const Modal = (props) => {
    return <Fragment>
         {/* Here we create Portals */}
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} 
    </Fragment>
};

export default Modal;
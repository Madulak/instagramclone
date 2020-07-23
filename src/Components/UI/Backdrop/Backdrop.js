import React from 'react';
import classes from './Backdrop.module.css';
// import Modal from '../Modal/Modal';

const backdrop = (props) => {

    return (
        <div onClick={props.disable} className={classes.Backdrop}>
            {props.children}
        </div>
    );
}

export default backdrop;
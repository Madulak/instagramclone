import React from 'react';
import classes from './Backdrop.module.css';
import Modal from '../Modal/Modal';

const backdrop = (props) => {

    return (
        <div onClick={props.disable} className={classes.Backdrop}>
            <Modal>
                <h1>Hello</h1>
                <h2>Hpalaldfjldjf</h2>
                <p>sjlsjdlffffffffffffffffslfjlsdjl</p>
                <p>Welcome</p>
                
            </Modal>
        </div>
    );
}

export default backdrop;
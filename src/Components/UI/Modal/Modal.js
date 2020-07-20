import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {

    return (
        <div className={classes.Modal}>
            <div className={classes.Children}>{props.children}</div>
        </div>
    );
}

export default modal
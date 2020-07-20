import React from 'react';
import classes from './Profilepic.module.css';

const Profilepic = (props) => {

    return (
        <div className={classes.Profilepic}>
            <img className={classes.Image} src={props.imageUrl} alt="Profile Pic" />
        </div>
    );
}

export default Profilepic;
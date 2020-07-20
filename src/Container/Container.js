import React from 'react';
import classes from './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';


const container = React.memo((props) => {

    return (
        <div className={classes.Container}>
            <Toolbar />
            {props.children}
        </div>
    );
})

export default container;
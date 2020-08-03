import React from 'react';
import classes from './Message.module.css';

import Container from '../../../Container/Container';

const message = () => {

    return (
        <Container>
            <div className={classes.Message}>
                <h3>Message Feature Coming Soon!!</h3>
            </div>
            
        </Container>
    );
}

export default message;
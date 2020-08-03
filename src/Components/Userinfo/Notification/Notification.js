import React from 'react';
import classes from './Notification.module.css';

import Container from '../../../Container/Container';

const notification = () => {

    return (
        <Container>
            <div className={classes.Notification}>
                <h3>Notification Feature Coming Soon!!!</h3>
            </div>
        </Container>
    );
}

export default notification;
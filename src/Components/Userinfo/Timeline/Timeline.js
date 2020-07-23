import React from 'react';
import classes from './Timeline.module.css';

import Container from '../../../Container/Container';

const timeline = () => {

    return (
        <Container>
            <div className={classes.Timeline}>
                <h1>Myposts of the Timeline</h1>
            </div>
            
        </Container>
    );
}

export default timeline;
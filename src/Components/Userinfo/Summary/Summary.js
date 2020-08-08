import React from 'react';
import classes from './Summary.module.css';

const summary = React.memo((props) => {


    return (
        <div className={classes.Summary}>
            <div className={classes.Username}>
                <div>
                    <p className={classes.Usernametext}> {props.username} </p>
                </div>
                
            </div>
            <div className={classes.Post}>
                <p>{props.posts} posts</p>
                <p>{props.followers} followers</p>
            </div>
        </div>
    );
})

export default summary;
import React, { useContext } from 'react';
import classes from './Summary.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';

const summary = React.memo((props) => {

    const authContext = useContext(AuthContext);

    return (
        <div className={classes.Summary}>
            <div className={classes.Username}>
                <div>
                    <p className={classes.Usernametext}> {props.username} </p>
                </div>
                <div>
                    <Link to={`/${authContext.username}/edit`} >Edit Profile</Link>
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
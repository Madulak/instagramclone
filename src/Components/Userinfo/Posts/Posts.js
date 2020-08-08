import React, { useEffect, useState } from 'react';
import classes from './Posts.module.css';
import Profile from '../../../Container/Profile/Profile';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Container from '../../../Container/Container';


const posts = React.memo((props) => {

    const id = props.match.params.id
    const [userpost, setUserpost] = useState([]);
    
    useEffect(() => {
        Axios.get('https://madula.herokuapp.com/user/'+id)
            .then(response => {
                setUserpost(response.data.data.myposts);
            })
            .catch(err => {
                console.log(err);
            })
    },[id])

    return (
        <Container>
            <Profile id={id}>
                <div className={classes.Posts}>
                    
                    {userpost.map(ig => (
                        <Link key={ig._id} to={"/post/"+ig._id}>
                            <div  className={classes.Mypost}>
                                <img className={classes.Image} src={"https://madula.herokuapp.com/"+ig.mediaUrl} alt={ig.postText} />
                            </div>
                        </Link>
                    ))}
                </div>
            </Profile>
        </Container>
    );
})

export default posts;
import React, { useEffect, useState } from 'react';

import Profilepic from '../../Components/Images/Profilepic/Profilepic';
import Summary from '../../Components/Userinfo/Summary/Summary';
import Container from '../Container';

import classes from './Profile.module.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const profile = React.memo((props) => {

    const [username, setUsername] = useState('');
    const [followers, setFollowers] = useState(NaN);
    const [posts, setPosts] = useState(NaN);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        Axios.get('http://localhost:8080/'+props.match.params.id)
            .then(response => {
                console.log(response.data.data.username);
                setUsername(response.data.data.username);
                setFollowers(response.data.data.followers.length)
                setPosts(response.data.data.myposts.length);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    },[props.match.params.id])


    return (
        <div className={classes.Profile}>
            {/* <Container> */}
            <div className={classes.PhotoandSummary}>
                <Profilepic imageUrl="/home/devnode/Downloads/desktop.jpg" />
                <Summary username={loading ? 'Loading!!':username} followers={followers} posts={posts}/>
            </div>
                <hr style={{color: 'black'}} />
            <div className={classes.UserContent}>
                <Link to="">Post</Link>
                <Link to="">IGTV</Link>
                <Link to="">Saved</Link>
                <Link to="">Tagged</Link>
            </div>
            {/* </Container> */}
        </div>
    );
})

export default profile;
import React, { useEffect, useState } from 'react';

import Profilepic from '../../Components/Images/Profilepic/Profilepic';
import Summary from '../../Components/Userinfo/Summary/Summary';
// import Posts from '../../Components/Userinfo/Posts/Posts';
// import Bookmark from '../../Components/Userinfo/Bookmarkedpost/Bookmarkedpost';
// import Instagramtv from '../../Components/Userinfo/InstagramTV/Instagramtv';
// import Container from '../Container';

import classes from './Profile.module.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import { Route, Switch, Router } from 'react-router';

import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const profile = React.memo((props) => {

    const [username, setUsername] = useState();
    const [followers, setFollowers] = useState();
    const [posts, setPosts] = useState();
    // const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // setLoading(true);
        Axios.get('http://localhost:8080/user/'+props.id)
            .then(response => {
                console.log(response.data.data);
                setUsername(response.data.data.username);
                setFollowers(response.data.data.followers.length)
                setPosts(response.data.data.myposts.length);
                // setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    },[props.id, username])


    return (
        <div className={classes.Profile}>
            {/* <Container> */}
            <div className={classes.PhotoandSummary}>
                <Profilepic imageUrl="https://i.eurosport.com/2020/02/16/2776480-57351610-2560-1440.jpg" />
                <Summary username={username} followers={followers} posts={posts}/>
            </div>
                <hr style={{color: 'black'}} />
            <div className={classes.UserContent}>
                <div>
                    <Link to={"/"+props.id}>
                        <ViewModuleOutlinedIcon style={{fontWeight: 100}}/>
                    <span>POSTS</span>
                    </Link>
                </div>
                <div>
                <Link to={'/'+props.id+"/channel"}>
                    <TvOutlinedIcon />
                    <span>IGTV</span>
                </Link>
                </div>
                <div>
                <Link to="">
                    <BookmarkBorderOutlinedIcon />
                    <span>SAVED</span>
                </Link>
                </div>
                {/* <div>
                    <Link to="">TAGGED</Link>
                </div> */}
                
            </div>

            <div className={classes.UserMedia}>
                
                    {props.children}
                
            </div>
            {/* </Container> */}
        </div>
    );
})

export default profile;
import React, { useEffect, useContext, useState, useRef } from 'react';
import classes from './Timeline.module.css';

import SendOutlined from '@material-ui/icons/SendOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import CommentOutlined from '@material-ui/icons/CommentOutlined';

import Container from '../../../Container/Container';
import Axios from 'axios';
import { AuthContext } from '../../../context/context';

const timeline = React.memo((props) => {

    const authContext = useContext(AuthContext);
    const userId = authContext.username;
    const token = authContext.token;

    const [data, setData] = useState([]);
    const [comment, setComment] = useState('');

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
        if(userId !== null) {
            Axios.get('http://localhost:8080/timeline/'+userId)
            .then(response => {
                console.log(response);
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
            
        }
        document.title = 'Instagram Clone'
        
    },[userId]);

    const likeHandler = ( id) => {

        console.log(token);
        console.log(id)    
        // const config = {
        //     headers: {
        //         Authorization: 'Bearer '+token
        //     }
        // }

        fetch('http://localhost:8080/like/'+id,{
            method: 'POST',
            headers: {
                Authorization : 'Bearer '+token
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
      };

    

    return (
        <Container>
            <div className={classes.Timeline}>
                {data.map(ig => (
                    <div className={classes.TimelinePost} key={ig._id}>
                        <div className={classes.postCreator}>
                            <div className={classes.Image}>
                                <img src="" alt={ig.postCreator.username ? ig.postCreator.username.charAt(0).toUpperCase() : ''} />
                            </div>
                            <div className={classes.UserName}>
                                <p>{ig.postCreator.username}</p> 
                            </div>
                           
                        </div>
                        <div className={classes.MediaUrl}>
                            <img src={"http://localhost:8080/"+ig.mediaUrl} alt={ig.postText} />
                        </div>
                        <div>
                            <div className={classes.Reactions}>
                                <FavoriteBorderOutlined onClick={() => likeHandler(ig._id)} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />
                                <CommentOutlined style={{color: 'black', fontSize: 30, paddingLeft: '0.5rem', paddingRight: '0.5rem'}} />
                                <SendOutlined style={{color: 'black', fontSize: 30, paddingLeft: '0.5rem', paddingRight: '0.5rem'}} />
                            </div>
                            <div>
                                <p><span>{ig.postCreator.username}</span>{ig.postText}</p>
                                <p>{ig.createdAt}</p>
                            </div>
                            
                            <div className={classes.Form}>
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    const config = {
                                        headers: {
                                            Authorization: 'Bearer '+token
                                        }
                                    }
                            
                                    const commentdata = {
                                        comment: comment
                                    }
                            
                                    Axios.post('http://localhost:8080/comment/'+ig._id,commentdata,config)
                                        .then(response => {
                                            console.log(response);
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        });
                                        setComment('');
                                }}> 
                                    <input ref={addToRefs} key={ig._id} onChange={(event) => {
                                       console.log(comment);
                                        setComment(event.target.value)
                                    }} value={comment} type="text" placeholder="Add a Comment..." />
                                    <button type="submit">post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </Container>
    );
})

export default timeline;
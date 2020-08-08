import React, { useEffect, useState } from 'react';
import classes from './Detailedpost.module.css';

import Container from '../../../Container/Container';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Axios from 'axios';

import { MessageBox } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

import date from 'date-and-time';
    

const detailedpost = React.memo((props) => {
 
    const [posturl, setPosturl] = useState();
    const [postdate, setPostdate] = useState();
    const [postcreator, setPostcreator] = useState();
    const [posttext, setPosttext] = useState();
    const [comments, setComments] = useState([]);
    // const [postcreatorimage, setPostcreatorimage] = useState();
    
    const postid = props.match.params.id;
    

    useEffect(() => {
        Axios.get('https://madula.herokuapp.com/post/'+postid)
            .then(response => {
                setPostdate(response.data.data.createdAt);
                setPosturl(response.data.data.mediaUrl);
                setPostcreator(response.data.data.postCreator.username);
                setPosttext(response.data.data.postText);
                setComments(response.data.data.comment)
                
                
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[postid])

    const disablebackdrop = () => {
        props.history.goBack();
    }

    const ago = (dates) => {
        
        if (Math.round(date.subtract(new Date(), new Date(dates)).toSeconds()) > 0 && Math.round(date.subtract(new Date(), new Date(dates)).toSeconds()) < 60)  {
            return 'Moment ago'
        } else if  (Math.round(date.subtract(new Date(), new Date(dates)).toMinutes()) > 0 && Math.round(date.subtract(new Date(), new Date(dates)).toMinutes()) < 60 ) {
            return Math.round(date.subtract(new Date(), new Date(dates)).toMinutes()) + ' Minutes Ago'
        } else if (Math.round(date.subtract(new Date(), new Date(dates)).toHours()) > 0 && Math.round(date.subtract(new Date(), new Date(dates)).toHours()) < 24) {
            return Math.round(date.subtract(new Date(), new Date(dates)).toHours()) + ' Hours Ago'
        } else if (Math.round(date.subtract(new Date(), new Date(dates)).toDays()) > 0 && Math.round(date.subtract(new Date(), new Date(dates)).toDays()) < 31) {
            return Math.round(date.subtract(new Date(), new Date(dates)).toDays()) + ' Days Ago'
        }
        
        return Math.round(date.subtract(new Date(), new Date(dates)).toDays())
        // Math.round(date.subtract(new Date(), new Date(ig.createdAt)).toDays())
    }

    return (
        <Container>
            <Backdrop  disable={disablebackdrop}>
                <Modal >
                    <div className={classes.Detailedpost}>
                        <div className={classes.PostImage}>
                            <img src={"http://localhost:8080/"+posturl} alt={posttext}/>
                        </div>
                        <div className={classes.PostContent}>
                            <div className={classes.postCreator}>
                                <div className={classes.postCreatorImage}>
                                    <img src="" alt={postcreator ? postcreator.charAt(0) : null} />
                                </div>
                                <div className={classes.PostCreatorName}>
                                    <p>{postcreator}</p>
                                </div>
                                
                            </div>

                            <div className={classes.PostText}>
                                <div className={classes.Image}>
                                    <img src="" alt={postcreator ? postcreator.charAt(0) : null} />
                                </div>
                                
                                <p>{posttext}</p>
                            </div>

                            <div className={classes.Comment}>
                                {comments.map(ig => (
                                    <div className={classes.CommentText} key={ig._id}>
                                        
                                        {/* <p>{ig.createdAt}</p> */}
                                        <div className={classes.Image}>
                                            <img src="" alt={postcreator ? postcreator.charAt(0) : null} />
                                        </div>
                                        <MessageBox
                                        position={'left'}
                                        text={ig.commentText}
                                        date={new Date(ig.createdAt)}
                                        title={ig.commentCreator.username}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className={classes.PostDate}>
                                <p>{ago(postdate)}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </Modal>
            </Backdrop>
        </Container>
    );
})

export default detailedpost;
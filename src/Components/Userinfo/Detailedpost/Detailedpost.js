import React, { useEffect, useState } from 'react';
import classes from './Detailedpost.module.css';

import Container from '../../../Container/Container';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Axios from 'axios';

const detailedpost = React.memo((props) => {
 
    const [posturl, setPosturl] = useState();
    const [postdate, setPostdate] = useState();
    const [postcreator, setPostcreator] = useState();
    const [posttext, setPosttext] = useState();
    // const [postcreatorimage, setPostcreatorimage] = useState();
    
    const postid = props.match.params.id;
    

    useEffect(() => {
        Axios.get('http://localhost:8080/post/'+postid)
            .then(response => {
                setPostdate(response.data.data.createdAt);
                setPosturl(response.data.data.mediaUrl);
                setPostcreator(response.data.data.postCreator.username);
                setPosttext(response.data.data.postText);
                
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[postid])

    const disablebackdrop = () => {
        props.history.goBack();
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
                                <div>
                                    <p>{postcreator}</p>
                                </div>
                                
                            </div>
                            <div>
                                <p>{posttext}</p>
                            </div>
                            <div>
                                <p>{postdate}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </Modal>
            </Backdrop>
        </Container>
    );
})

export default detailedpost;
import React, { useState, useContext }  from 'react';
import classes from './uploadpost.module.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Container from '../../../Container/Container';
import Axios from 'axios';

import { AuthContext } from '../../../context/context';

const uploadpost = React.memo((props) => {

    const authContext = useContext(AuthContext);
    const token = authContext.token;
    // const [disablebackdrop, setDisablebackdrop] = useState(false);
    const [uploadtext, setUploadtext] = useState('');
    const [file, setFile] = useState('');

    const textInputhandler = (event) => {
        setUploadtext(event.target.value);
    }

    const fileInputhandler = (event) => {
        event.preventDefault();
        setFile(event.target.files[0]);
    }

    const postUploadHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('postText', uploadtext);
        formData.append('image', file);

        const config = {
            headers: {
                Authorization: 'Bearer '+token,
                'content-type': 'multipart/form-data'
            }
        }

        Axios.post('http://localhost:8080/createpost', formData, config )
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
            setUploadtext('');
            setFile('');
    }
    
    const goback = (event) => {
        event.preventDefault();
        props.history.goBack();
    }

    document.title = 'Upload'

    return (
        // <div className={classes.Uploadpost}>
            <Container>
                <Backdrop>
                    <Modal>
                        <div className={classes.UploadpostContent}>
                            <h1>Upload Post</h1>
                            <div className={classes.Form}>
                                <form onSubmit={postUploadHandler} >
                                    <input type="text" placeholder="What's in your Mind? " value={uploadtext} onChange={textInputhandler} />
                                    <input type="file" onChange={fileInputhandler}  />
                                    <button type="submit">upload</button>
                                    <button onClick={goback}>cancel</button>
                                </form>
                            </div>
                            
                        </div>
                    </Modal>
                </Backdrop>
            </Container>
        /* </div> */
    );
});

export default uploadpost;
import React, { useEffect, useState } from 'react';
import classes from './Explore.module.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Container from '../../../Container/Container';


const posts = React.memo((props) => {

    const id = props.match.params.id
    const [data, setData] = useState([]);
    
    useEffect(() => {
        Axios.get('https://madula.herokuapp.com/explore')
            .then(response => {
                setData(response.data.data);
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            })
            document.title = 'Instagram Clone'
    },[id])

    return (
        <Container>
                <div className={classes.Posts}>
                    
                    {data.map(ig => (
                        <Link key={ig._id} to={"/post/"+ig._id}>
                            <div  className={classes.Mypost}>
                                    <img className={classes.Image} src={"https://madula.herokuapp.com/"+ig.mediaUrl} alt={ig.postText} />
                            </div>
                        </Link>
                    ))}
                </div>
            
        </Container>
    );
})

export default posts;
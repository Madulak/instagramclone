import React from 'react';
import Profile from '../../../Container/Profile/Profile';
import Container from '../../../Container/Container';

const instagramtv = (props) => {

    const id = props.match.params.id;
    console.log(props); 

    return (
        <Container>
            <Profile id={id}>
                <div>
                    <h1>Instagram Tv</h1>
                    <h3>This Feature will be added soon!!!</h3>
                </div>
            </Profile>
        </Container>
        
    );
}

export default instagramtv;
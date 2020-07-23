import React from 'react';
import Profile from '../../../Container/Profile/Profile';

const instagramtv = (props) => {

    const id = props.match.params.id;
    console.log(props); 

    return (
        <Profile id={id}>
            <div>
                <h1>Instagram Tv</h1>
            </div>
        </Profile>
    );
}

export default instagramtv;
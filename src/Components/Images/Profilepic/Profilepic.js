import React, { useState } from 'react';
import classes from './Profilepic.module.css';
import ImageUploader from 'react-images-upload';


const Profilepic = (props) => {

    const [profpic, setProfpic] = useState();

    const onFilechanger = picture => {
        setProfpic(picture)
    }

    console.log(profpic);

    return (
        <div className={classes.Profilepic}>
            <img className={classes.Image} src={props.imageUrl} alt={props.alt ? props.alt.charAt(0): null} />
            <ImageUploader onChange={onFilechanger} singleImage={true} buttonStyles={{backgroundColor: 'purple'}} fileContainerStyle={{backgroundColor: 'transparent', margin: 0, padding: 0}} className={classes.ImageUploader} withLabel={false} withIcon={false} buttonText='Choose Image' ></ImageUploader>
        </div>
    );
}

export default Profilepic;
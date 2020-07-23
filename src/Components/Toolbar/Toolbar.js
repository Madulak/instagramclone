import React, { useState, useContext } from 'react';
import classes from './Toolbar.module.css';
// import {    } from '@material-ui/icons';
import Home from  '@material-ui/icons/Home';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined';
import SearchRounded from '@material-ui/icons/SearchRounded';
import Favorite from '@material-ui/icons/Favorite';
import Explore from '@material-ui/icons/Explore';
import Send from '@material-ui/icons/Send';
import SendOutlined from '@material-ui/icons/SendOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudUpload from '@material-ui/icons/CloudUpload';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/context'

const toolbar = React.memo((props) => {

    const authContext = useContext(AuthContext);
    const username = authContext.username;

    const [inputstate, setInputstate] = useState(false);
    
    const [homebutton, setHomebutton] = useState(true);
    const [activitybutton, setActivitybutton] = useState(false);
    const [explorebutton, setExporebutton] = useState(false);
    const [directbutton, setDirectbutton] = useState(false);
    const [accountbutton, setAccountbutton] = useState(false);
    
    
    let widthinput;
    if(inputstate) {
        widthinput = {width: '90%'}
    }
    // console.log(inputstate);

    const searche = (event) => {
        event.preventDefault();
        if(inputstate) {
            setInputstate(false);
        } else {
            setInputstate(true);
        }
    }

    const homebu = (event) => {
        if(homebutton === true) {
            setHomebutton(false);
        } else {
            setHomebutton(true);
            setActivitybutton(false);
            setExporebutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        }
        console.log(homebutton);
    }

    const activity = () => {
        if (activitybutton === true){
            setActivitybutton(false);
        } else {
            setActivitybutton(true);
            setHomebutton(false);
            setExporebutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        }
    }

    const explore = () => {
        if(explorebutton === true) {
            setExporebutton(false);
        } else {
            setExporebutton(true);
            setHomebutton(false);
            setActivitybutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        }
    }

    const direct = () => {
        if(directbutton === true) {
            setDirectbutton(false);
        } else {
            setDirectbutton(true);
            setHomebutton(false);
            setActivitybutton(false);
            setExporebutton(false);
            setAccountbutton(false);
        }
    }

    const account = () => {
        if(accountbutton === true) {
            setAccountbutton(false);
        } else {
            setAccountbutton(true);
            setHomebutton(false);
            setActivitybutton(false);
            setExporebutton(false);
            setDirectbutton(false);
        }
    }

    const disable = (event) => {
        event.preventDefault();
        setInputstate(false);
    }

    return (
        <div onClick={disable} className={classes.Toolbar}>
            <div>
                <Link to="/" className={classes.Instagram}>Instagram</Link>
            </div>
            <div onClick={searche} className={classes.Search}>
                <SearchRounded />
                <input style={inputstate ? widthinput: null} type="text" placeholder="Search" />
            </div>
            <div className={classes.MenuIcon}>
                <Link to="/">{homebutton ?<Home onClick={homebu} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <HomeOutlined onClick={homebu} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</Link>

                <Link to="/direct">{directbutton === false ?<SendOutlined onClick={direct} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <Send onClick={direct} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</Link>

                <Link to="/activity">{activitybutton === false ?<FavoriteBorder onClick={activity} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>: 
                    <Favorite onClick={activity} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</Link>

                <Link to="/explore">{explorebutton === false ? <ExploreOutlined onClick={explore} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <Explore onClick={explore} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</Link>

                <Link to={"/"+username}>{accountbutton === false ? <AccountCircleOutlined onClick={account} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                                    <AccountCircle onClick={account} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</Link>

                <Link to="/upload" ><CloudUpload  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} /></Link>


            </div>
                
        </div>
    );
})

export default toolbar;
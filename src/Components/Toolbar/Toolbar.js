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

import { NavLink} from 'react-router-dom';

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
        
            setHomebutton(true);
            setActivitybutton(false);
            setExporebutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        
        console.log(homebutton);
    }

    const activity = () => {
        
            setActivitybutton(true);
            setHomebutton(false);
            setExporebutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        
    }

    const explore = () => {
        
        setExporebutton(true);
        setHomebutton(false);
            setActivitybutton(false);
            setDirectbutton(false);
            setAccountbutton(false);
        
    }

    const direct = () => {
        
        setDirectbutton(true);
        setHomebutton(false);
            setActivitybutton(false);
            setExporebutton(false);
            setAccountbutton(false);
        
    }

    const account = () => {
       
        setHomebutton(false);
        setAccountbutton(true);
            setActivitybutton(false);
            setExporebutton(false);
            setDirectbutton(false);
        
    }

    const disable = (event) => {
        event.preventDefault();
        setInputstate(false);
    }

    

    return (
        <div onClick={disable} className={classes.Toolbar}>
            <div>
                <NavLink to="/" className={classes.Instagram}>Instagram-clone</NavLink>
            </div>
            <div onClick={searche} className={classes.Search}>
                <SearchRounded />
                <input style={inputstate ? widthinput: null} type="text" placeholder="Search" />
            </div>
            <div className={classes.MenuIcon}>
                <NavLink onClick={homebu} to="/">{homebutton ?<Home  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <HomeOutlined  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</NavLink>

                <NavLink onClick={direct} to="/direct/messages">{directbutton === false ?<SendOutlined  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <Send  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</NavLink>

                <NavLink onClick={activity} to="/activity/notifications">{activitybutton === false ?<FavoriteBorder  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>: 
                    <Favorite  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</NavLink>

                <NavLink  to="/explore/instagram">{explorebutton === false ? <ExploreOutlined onClick={explore} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                    <Explore onClick={explore} style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</NavLink>

                <NavLink onClick={account} to={"/"+username}>{accountbutton === false ? <AccountCircleOutlined  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} />: 
                                    <AccountCircle  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}}/>}</NavLink>

                <NavLink to={"/"+username+"/upload"} ><CloudUpload  style={{color: 'black', fontSize: 30, marginLeft: '0.5rem', marginRight: '0.5rem'}} /></NavLink>


            </div>
                
        </div>
    );
})

export default toolbar;
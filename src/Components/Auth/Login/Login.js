import React, { useContext, useState } from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context'; 

import Backdrop from '../../UI/Backdrop/Backdrop';

const auth = React.memo((props) => {

    const authContext = useContext(AuthContext);
    const login = authContext.login;

    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [backdrop, setBackdrop] = useState(false);

    const loginHandler = (event) => {
        event.preventDefault();
        if(useremail !== '' && password !== '') {
            const authe = {
                auth: useremail,
                password: password
            }
            login(authe);
        }
        setUseremail('');
        setPassword('');
        props.history.push('/')
    }

    const onbackdropHandler = (event) => {
        event.preventDefault();
        setBackdrop(true);
    }

    const ondisable = () => {
        setBackdrop(false);
    }

    return (
        <div className={classes.Auth}>
            <div className={classes.FormContainer}>
                <form onSubmit={loginHandler}>
                    <p className={classes.text}>Instagram</p>
                    <input type="email" placeholder="email or username" value={useremail} onChange={(event) => setUseremail(event.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <button type="submit">submit</button>
                </form>
            </div>
            <div>
                <p>Do not have Account? <Link to="/signup">Sign up</Link></p>
                <button onClick={onbackdropHandler}>modal</button>
            </div>
            { backdrop ? <Backdrop disable={ondisable} /> : null}
        </div>
    );
});

export default auth;
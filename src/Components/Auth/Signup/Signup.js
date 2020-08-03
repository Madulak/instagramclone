import React, { useState, useContext } from 'react';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';

const auth = React.memo(() => {

    const authContext = useContext(AuthContext);
    const signup = authContext.signup;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [confirm, setConfirm] = useState('');

    const signupHandler = (event) => {
        event.preventDefault();
        if(username !== '' && email !== '' && confirm !== '') {
            const auth = {
                username: username,
                email: email,
                password: password,
                confirm: confirm
            }
            signup(auth);
        }
        setUsername('');
        setEmail('');
        setPasssword('');
        setConfirm('');
    }
    document.title = 'Signup Instagram Clone'
    return (
        <div className={classes.Auth}>
            <div className={classes.FormContainer}>
                <h3>Instagram Signup</h3>
                <form onSubmit={signupHandler}>
                    <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(event) => setPasssword(event.target.value)} />
                    <input type="password" placeholder="confirm" value={confirm} onChange={(event) => setConfirm(event.target.value)} />
                    <button type="submit">submit</button>
                </form>
            </div>
            <div>
                <p>Have an Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
});

export default auth;
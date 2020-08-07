import React, { useState } from 'react';
import Axios from 'axios';

export const AuthContext = React.createContext({
    isAuth: false,
    token: null,
    username: null,
    userId: null,
    error: null,
    login: () => {},
    signup: () => {},
    logout: () => {}
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState(null);

    const loginHandler = (auth) => {

        Axios.post('http://localhost:8080/login', auth)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('username', response.data.username);

                setToken(response.data.token);
                setUsername(response.data.username);
                setUserId(response.data.userId);
                
            })
            .catch(err => {
                console.log(err);
                setError(err);
            });
            setIsAuthenticated(true);
    }

    const signupHandler = (auth) => {

        Axios.post('http://localhost:8080/signup', auth)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
    }

    return (
        <AuthContext.Provider 
            value={{isAuth: isAuthenticated,
            login: loginHandler,
            signup: signupHandler,
            token: token,
            error: error,
            username: username,
            userId: userId,
            logout: logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
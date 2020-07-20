import React, { useContext, Fragment } from 'react';

import Container from './Container/Container';
// import Auth from './Components/Auth/Signup/Signup';

import { AuthContext } from './context/context';
import { Switch, Route, Redirect } from 'react-router';

import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
import Home from './Container/Container';

import Profile from './Container/Profile/Profile';

const App = () => {

  const authContext = useContext(AuthContext);
  const isAuth = authContext.isAuth;
  
  return (
      
      <Switch>
          {isAuth ? <Fragment>
            <Container>
            <Route exact path="/:id" component={Profile} />
            <Route exact path="/" component={Home}/> 
            </Container>
          </Fragment> : 
            <Fragment>
              <Redirect from="/" to="/login" />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            </Fragment>
          }
           
      </Switch>
  );
}

export default App;

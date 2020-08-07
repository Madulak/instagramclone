import React, { useContext, Fragment } from 'react';

// import Container from './Container/Container';
// import Auth from './Components/Auth/Signup/Signup';

import { AuthContext } from './context/context';
import { Switch, Route, Redirect } from 'react-router';

import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';

import Profile from './Components/Userinfo/Posts/Posts';
import Instagramtv from './Components/Userinfo/InstagramTV/Instagramtv';
import Upload from './Components/Userinfo/UploadPost/uploadpost';
// import Profile from './Container/Profile/Profile';
import Detailedpost from './Components/Userinfo/Detailedpost/Detailedpost';
import Timeline from './Components/Userinfo/Timeline/Timeline';
import Explore from './Components/Userinfo/Explore/Explore';
import Message from './Components/Userinfo/Message/Message';
import Notification from './Components/Userinfo/Notification/Notification';

const App = () => {

  const authContext = useContext(AuthContext);
  const isAuth = authContext.isAuth;
  
  return (
      
      <Switch>
          {isAuth ? <Fragment>
            {/* <Container> */}
            
              <Route exact path="/explore/instagram" component={Explore} />
              <Route exact path="/direct/messages" component={Message} />
              <Route exact path="/activity/notifications" component={Notification} />
              <Route exact path="/:id/channel" component={Instagramtv} />
              <Route exact path="/:id" component={Profile} />
              <Route exact path="/" component={Timeline} />
              <Route exact path="/:id/upload" component={Upload} />
              <Route exact path="/post/:id" component={Detailedpost} />
              
            {/* </Container> */}
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

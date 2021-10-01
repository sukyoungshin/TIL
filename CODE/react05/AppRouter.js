import React, { useState } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
/* 
HashRouter : 라우터 (DOM 간의 이동을 시켜주는 라우터)
Route : 경로를 받아서 처리해주는 wrapper 컴포넌트 
Switch : 경로들을 감싸는 wrapper (스위치 역할)
Link : 링크...
*/
import Home from './Home';
import Profile from './Profile';
import SignIn from './SignIn';


function AppRouter() {

  const [ currentUser, setCurrentUser ] = useState(null);
  const signIn = (user) => {
    setCurrentUser(user);
  };
  const signOut = () => {
    setCurrentUser(null);
  };

  return(
    <HashRouter>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/signin">SIGN-IN</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser} />
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={currentUser} />
        </Route>
        <Route exact path="/signin">
          <SignIn currentUser={currentUser} signIn={signIn} signOut={signOut} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;
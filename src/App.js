import React from 'react';
import Login from './Pages/Login/Login';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import CheckUserStatus from './Components/checkUserStatus/UserStatus';
import Contact from './Pages/Content/content';
import history from './Components/History';
import AddClockPhoto from './Pages/AddPhoto/AddClockPhoto';
import AddFramePhoto from './Pages/AddPhoto/AddFramePhoto';

class App extends React.Component{
  render(){
    return(
      <div> 
      <Router history={history}>
        <Switch>
        <Route exact path="/">
            <CheckUserStatus />
          </Route>
          <Route  path="/home">
            <Contact />
          </Route>
          <Route  path="/login">
              <Login  />
          </Route>
          <Route  path="/AddClockImages">
              <AddClockPhoto  />
          </Route>
          <Route  path="/AddFrameImages">
              <AddFramePhoto  />
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
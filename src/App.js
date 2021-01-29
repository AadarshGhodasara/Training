import React from 'react';
// import './App.css';
// import About from './Pages/HookExample/HookExample';
// import Profile from './Pages/Profile/Profile';
// import Form from './Pages/Form/Form';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './Pages/Content/content';
// import Home from './Pages/Home/Home';
// import { createStore  } from 'redux';
import history from './Components/History';
// import { Provider } from 'react-redux';
// import reducer from './reducer/reducer';
import CheckUserStatus from './Components/checkUserStatus/UserStatus';
// import AddPhoto from './Pages/addPhoto/AddPhoto';
// import ShowImages from './Pages/showImages/showImages';
// import TempLogin from './Pages/Login/TempLogin';
// const  store = createStore(reducer);

// console.log(store.getState());

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      headerName:'Home',
    }
    // this.setHeader = this.setHeader.bind(this);
  }

  // setHeader(e){
  //   this.setState({headerName:e});
  // }



  render(){
    return(
      // <div className="App">
      <div> 
      <Router history={history}>
        <Switch>
          <Route exact path="/">
              <CheckUserStatus  />
          </Route>
          <Route  path="/login">
              <Login  />
          </Route>
          {/* <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/home">
            {/* <SignUp /> */}
            <Contact />
          </Route>
          
          {/* <Route path="/HookExample">
            <About />
          </Route>
          <Route path="/Profile">
            <Provider store={store}> 
              <Profile />
            </Provider>
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/AddPhoto">
            <AddPhoto />
          </Route>
          <Route path="/ShowImages">
            <ShowImages />
          </Route> */}
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
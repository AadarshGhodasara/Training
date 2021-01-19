import React from 'react';
import './App.css';
// import Home from './js/Home';
import About from './js/HookExample';
import Profile from './js/Profile';
import Form from './js/Form';
import Login from './js/Login';
import SignUp from './js/SignUp';
import {
  Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { createStore  } from 'redux';
// import thunk from 'redux-thunk';
import history from './js/history';

import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
// import Sidebar from './js/SideBar';
const  store = createStore(reducer);

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
      <div className="App"> 
      {/* <Form /> */}
      <Router history={history}>
          {/* <div className="menu">
            <div className='firstTag'>
            <Sidebar pageWrapId={'page-wrap'}  outerContainerId={'outer-container'}   />
            </div>
            <div className="Login-header">
              <label className='Login-headerText'>{this.state.headerName}</label>
            </div>
            <div className='menuItem'>
              
              <h3 className='h3'><Link to="/" onClick={(e) => this.setState({headerName:'Login'})} >Login</Link></h3>
              <h3 className='h3'><Link to="/HookExample" onClick={(e) => this.setState({headerName:'Hook'})}>Hook</Link></h3>
              <h3 className='h3'><Link to="/Profile" onClick={(e) => this.setState({headerName:'Profile'})}>Profile</Link></h3>
              <h3 className='h3'><Link to="/Form" onClick={(e) => this.setState({headerName:'Registration Form'})}>Form</Link></h3>
              </div>
          </div> */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/HookExample">
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

        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
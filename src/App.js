import React from 'react';
import './App.css';
import About from './Pages/HookExample/HookExample';
import Profile from './Pages/Profile/Profile';
import Form from './Pages/Form/Form';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { createStore  } from 'redux';
import history from './Components/history';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import CheckUserStatus from './Components/checkUserStatus/UserStatus';
import AddPhoto from './Pages/addPhoto/AddPhoto';
import ShowImages from './Pages/showImages/showImages';

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
              <CheckUserStatus  />
          </Route>
          <Route  path="/login">
              <Login  />
          </Route>
          <Route path="/home">
            <Home />
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
          <Route path="/AddPhoto">
            <AddPhoto />
          </Route>
          <Route path="/ShowImages">
            <ShowImages />
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
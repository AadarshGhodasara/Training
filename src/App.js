import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Home from './js/Home';
import About from './js/HookExample';
import Profile from './js/Profile';
import Form from './js/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore  } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';


const  store = createStore(reducer);
// console.log(store.getState());

class App extends React.Component{
  render(){
    return(
      <div className="App"> 
      {/* <Form /> */}
      <Router>
          <div className="menu">
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/HookExample">Hook</Link></h3>
            <h3><Link to="/Profile">Profile</Link></h3>
            <h3><Link to="/Form">Form</Link></h3>
          </div>
        <Switch>
          <Route exact path="/">
            <Home />
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
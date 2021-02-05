import React , {Suspense  } from 'react';
// import Login from './Pages/Login/Login';
// import {
//   Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import history from './Components/history';
import Loader from './Components/Loader/LoaderModal';
import Navbar from './Components/layout/Navbar';
import { Route, Router, Switch } from 'react-router-dom';
// const CheckUserStatus = React.lazy(() => import('./Components/checkUserStatus/UserStatus'));
// const Contact = React.lazy(() => import('./Pages/content/content'));
// const AddClockPhoto = React.lazy(() => import('./Pages/AddPhoto/AddClockPhoto'));
// const AddFramePhoto = React.lazy(() => import('./Pages/AddPhoto/AddFramePhoto'));
const Home = React.lazy(() => import('./Pages/CRUD/Home'));
const About = React.lazy(() => import('./Pages/CRUD/About'));
const Contact = React.lazy(() => import('./Pages/CRUD/Contact'));
const NotFound = React.lazy(() => import('./Pages/CRUD/NotFound'));
const AddUser = React.lazy(()=>import('./Pages/CRUD/AddUser'));
const EditUser = React.lazy(()=>import('./Pages/CRUD/EditUser'));
const ViewUser = React.lazy(()=>import('./Pages/CRUD/ViewUser'));
class App extends React.Component{
  render(){
    return(
        <Suspense fallback={<Loader text='Loading' />}>
          <Router history={history}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/user/add' component={AddUser} />
              <Route exact path='/user/edit/:id' component={EditUser} />
              <Route exact path='/user/:id' component={ViewUser} />
              <Route  component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
    );
  }
}
export default App;
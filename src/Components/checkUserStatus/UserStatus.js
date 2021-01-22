import React from 'react';
import firebase from '../firebase';
import history from '../history';
import Loader from '../Loader';
import './checkUserStatus.css';
class UserStatus extends React.Component {

    constructor(){
        super();
        this.CheckUserStatus = this.CheckUserStatus.bind(this);
    }
    CheckUserStatus(){
        console.log('check user');
        // history.push({pathname:'/home'})
        console.log(firebase);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              history.push({pathname:'/home'})
            } else {
              // No user is signed in.
              history.push({pathname:'/login'})
            }
          });
    }
    componentDidMount(){
        this.CheckUserStatus();
    }
    render(){
        return(
            <div style={{height:window.innerHeight}} className='loader-tag'>
                <Loader text='Checking User Status...' />
            </div>
        );
    }

}

export default UserStatus;
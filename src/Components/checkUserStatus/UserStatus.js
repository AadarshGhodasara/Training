import React from 'react';
import firebase from '../firebase';
import history from '../history';
import LoaderModal from '../Loader/LoaderModal';
import './checkUserStatus.css';
class UserStatus extends React.Component {

    CheckUserStatus = () =>{
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
                <LoaderModal text='Checking User Status...' />
            </div>
        );
    }

}

export default UserStatus;
import React from 'react';
import firebase from '../Firebase';
import history from '../History';
import LoaderModal from '../Loader/LoaderModal';
// import Contact from '../../Pages/Content/content';
import './CheckUserStatus.css';
class UserStatus extends React.Component {

    CheckUserStatus = () =>{
        console.log('check user');
        // history.push({pathname:'/home'})
        console.log(firebase);
        firebase.auth().onAuthStateChanged(function(user) {
            console.log(user);
            if (user) {
              // User is signed in.
            //   history.push({pathname:'/home'})
            console.log("VERI");
            history.push({pathname:'/home'})
            // <Contact />
            } else {
                console.log("No VERI");
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
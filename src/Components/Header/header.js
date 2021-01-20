import React from 'react';
import { Link , Router } from "react-router-dom";
import history from '../history';
import './Header.css';
import fire from '../firebase';
import Sidebar from '../SideBar/SideBar'

class Header extends React.Component {

    logOutEvent = () => {
        console.log('Logout');
        fire.auth().signOut().then(() => {
            // Sign-out successful.
            alert('Sign-out successful...');
            history.push({pathname:'/'});
          }).catch((error) => {
            // An error happened.
            console.log(error.message);
          });
          
    }
    render(){
        return(
            <div>
                <Router history={history}>
                <div className="menu">
                    <div className='additional-tag'><p></p></div>
                    <div className='firstTag'>
                    <Sidebar pageWrapId={'page-wrap'}  outerContainerId={'outer-container'}   />
                    </div>
                    <div className="header-Tag">
                    <label className='header-Text'>{this.props.text}</label>
                    </div>
                    <div className='menuItem'>
                        <h3 className='h3'><Link to="/home" >Home</Link></h3>    
                        <h3 className='h3'><Link to="/HookExample" >Hook</Link></h3>
                        <h3 className='h3'><Link to="/Profile" >Profile</Link></h3>
                        <h3 className='h3'><Link to="/Form">Form</Link></h3>
                        <div className='h3' onClick={this.logOutEvent}>
                            <strong><label className='logOut-text'>Logout</label></strong>
                        </div>
                    </div>
                    <div className='last-tag'><p></p></div>
                </div>
                </Router>
            </div>
        );
    }

}

export default Header;
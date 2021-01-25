// import React from 'react';
// import { Link , Router } from "react-router-dom";
// import history from '../history';
// import './Header.css';
// import fire from '../firebase';
// import Sidebar from '../SideBar/SideBar'

// class Header extends React.Component {

//     logOutEvent = () => {
//         console.log('Logout');
//         fire.auth().signOut().then(() => {
//             // Sign-out successful.
//             alert('Sign-out successful...');
//             history.push({pathname:'/'});
//           }).catch((error) => {
//             // An error happened.
//             console.log(error.message);
//           });
          
//     }
//     render(){
//         return(
//             <div>
//                 <Router history={history}>
//                 <div className="menu">
//                     <div className='additional-tag'><p></p></div>
//                     <div className='firstTag'>
//                     <Sidebar pageWrapId={'page-wrap'}  outerContainerId={'outer-container'}   />
//                     </div>
//                     <div className="header-Tag">
//                     <label className='header-Text'>{this.props.text}</label>
//                     </div>
//                     <div className='menuItem'>
//                         <h3 className='h3'><a href='#ShowImages'> Home</a></h3>    
//                         <h3 className='h3'><Link to="/HookExample" >Hook</Link></h3>
//                         <h3 className='h3'><Link to="/Profile" >Profile</Link></h3>
//                         <h3 className='h3'><Link to="/Form">Form</Link></h3>
//                         <div className='h3' onClick={this.logOutEvent}>
//                             <strong><label className='logOut-text'>Logout</label></strong>
//                         </div>
//                     </div>
//                     <div className='last-tag'><p></p></div>
//                 </div>
//                 </Router>
//             </div>
//         );
//     }

// }

// export default Header;


import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { scroller } from "react-scroll";

function Header() {
    return(
        <div>
            {/* collapseOnSelect */}
            <ReactBootstrap.Navbar  expand="md" bg="dark" variant="dark">
                <ReactBootstrap.Navbar.Brand href="#Home">Header</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <ReactBootstrap.Nav.Link href="#Home">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link onClick={() => scroller.scrollTo('About', {
                            smooth: true,
                            duration: 50,
                        })}>About</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link  href="#Service"  >Service</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link  href="#AddPhoto">Add Photo</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link  href="#ShowPhoto">Show Photo</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default Header;
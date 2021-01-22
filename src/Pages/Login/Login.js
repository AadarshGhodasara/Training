import React  from 'react';
import './Login.css'; 
import fire from '../../Components/firebase';
import history from '../../Components/history';
// import Background from '../../../public/login_bg.png';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.submitLogin = this.submitLogin.bind(this)
    }
    
    submitLogin(){

        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(
            async function(){
                var user = fire.auth().currentUser;
                if(user.emailVerified === false){
                    alert('Email Not Verified...');
                }else{
                    alert('Successful Login...');
                    history.push({pathname:'/home'});
                }
            }
        )
        .catch((error) => alert(error.message))
    }
    render(){
        return(
            <div>
                <div className='Login-header'>
                    <h1>Header</h1>
                </div>
            <div className="tabelOutterTag">
                
                <div className='tabelTag'>
                    <label className='form-header'>Login</label>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Email</label>
                        <input type="text" onChange={(e) => this.setState({email:e.target.value})}  />
                    </div>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Password</label>
                        <input type="password" onChange={(e) => this.setState({password:e.target.value})}  />
                    </div>
                    <div className='inputTag'>
                        <input type="Submit" onClick={this.submitLogin}  />
                    </div>
                    <div className='signUpLabelTag'>
                        <label className='signUpLabel'>Not a Member ? <a href='/SignUp' className='sign-up-btn-css'><strong>Sign Up</strong> </a> Now </label>
                    </div>

                    {/* <label>Last Name:</label>
                    <input type="text"  onChange={this.lastNameChangeEvent} />                         */}
                </div>
            </div>
            </div>
        );
    }

}




export default Login;
import React  from 'react';
import '../Css/Login.css'; 
// import { useHistory } from "react-router-dom";


class Login extends React.Component {
    constructor(props){
        // const history = useHistory();
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    
    submitLogin = () => {
        console.log('email -> ',this.state.email);
        console.log('email -> ',this.state.password);
        
        console.log('IN');
        window.location.href='/Profile'
        // history.push('/Profile');
        // return <Redirect  to="/Profile" />
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
                        <label className='signUpLabel'>Not a Member ? <a href='/SignUp'><strong>Sign Up</strong> </a> Now </label>
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
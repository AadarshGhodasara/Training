import React  from 'react';
import '../Css/SignUp.css'; 
// import { useHistory } from "react-router-dom";


class SignUp extends React.Component {
    constructor(props){
        // const history = useHistory();
        super(props);
        this.state = {
            email:'',
            password:'',
            Name:'',
            Confirm_password:'',
        }
    }
    
    submitLogin = () => {
        console.log('email -> ',this.state.email);
        console.log('email -> ',this.state.password);
        if( !(this.state.password === this.state.Confirm_password) ){
            alert('Password Not Match...');
            this.setState({Confirm_password:''});
        }else{
            alert('Submit_Data');
            this.setState({Confirm_password:'',password:'',Name:'',email:''});
            window.location.href='/';
        }
        // window.location.href='/Profile'
    }
    render(){
        return(
            <div>
                <div className='Login-header'>
                    <h1>Header</h1>
                </div>
            <div className="signUpOutterTag">
                
                <div className='SignUptabelTag'>
                    <label className='form-header'>Sign Up</label>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Name</label>
                        <input type="text" onChange={(e) => this.setState({Name:e.target.value})}  value={this.state.Name} />
                    </div>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Email</label>
                        <input type="text" onChange={(e) => this.setState({email:e.target.value})}  value={this.state.email} />
                    </div>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Password</label>
                        <input type="password" onChange={(e) => this.setState({password:e.target.value})} value={this.state.password} />
                    </div>
                    <div className='inputTag'>
                        <label className='inputTagLabel'>Confirm Password</label>
                        <input type="password" onChange={(e) => this.setState({Confirm_password:e.target.value})}  value={this.state.Confirm_password} />
                    </div>
                    <div className='inputTag'>
                        <input type="Submit" onClick={this.submitLogin}  />
                    </div>
                    <div className='signUpLabelTag'>
                        <label className='signUpLabel'>Already Signed Up ? Go To <a href='/' className='a'><strong>Login</strong></a></label>
                    </div>

                    {/* <label>Last Name:</label>
                    <input type="text"  onChange={this.lastNameChangeEvent} />                         */}
                </div>
            </div>
            </div>
        );
    }

}

export default SignUp;
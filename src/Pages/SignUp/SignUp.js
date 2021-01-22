import React  from 'react';
import './SignUp.css'; 
import fire from '../../Components/firebase';
import history from '../../Components/history';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            Name:'',
            Confirm_password:'',
        }
    }


    submitLogin = (e) =>{
        if( !(this.state.password === this.state.Confirm_password) ){
            alert('Password Not Match...');
            this.setState({Confirm_password:''});
        }else{
            const email = this.state.email;
            const pass = this.state.password;
            fire.auth().createUserWithEmailAndPassword(email,pass)
            .then(
            async function () {
                var user = fire.auth().currentUser;
                user.sendEmailVerification().then(function() {
                    fire.database().ref('Users/'+user.uid).set({
                        name : this.state.Name,
                        Email : this.state.email 
                      }).then((data)=>{
                          //success callback
                        console.log('Sign Up Successful And Verification Link Sent In Your Email...')
                        this.setState({Confirm_password:'',password:'',Name:'',email:''});
                        history.push({ 
                            pathname: '/login',
                            state: this.state
                        });
                      }).catch((error)=>{
                          console.log('error ' , error)
                      })
                  }.bind(this)).catch(function(error) {
                    console.log(error)
                  });
            }.bind(this)
            )
            .catch((error) => alert(error.message))
        }
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
                     <input type="button" value='Submit'   onClick={this.submitLogin}  />
                    </div>
                    <div className='signUpLabelTag'>
                        <label className='signUpLabel'>Already Signed Up ? Go To <a href='/' className='a'><strong>Login</strong></a></label>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

export default SignUp;
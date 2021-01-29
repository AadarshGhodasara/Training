import React , { useState }  from 'react';
import './Login.css'; 
import fire  from '../../Components/Firebase';
import history from '../../Components/History';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { FormControl , FormLabel } from 'react-bootstrap';
import { setAdminVerify } from '../../Components/checkUserStatus/UserStatus';

const Login = () => {
    const [ email , setEmail ] = useState('');
    const [ pass , setPass ] = useState('');
    // const [adminVerify , setAdminVerify] = useState(false);

    
    function  submitLogin(){
        console.log(pass,'==',email)
        fire.auth().signInWithEmailAndPassword(email,pass)
        .then(
            async function(){
                const CurrentUser = fire.auth().currentUser;
                if(CurrentUser.emailVerified === false){
                    alert('Email Not Verified...');
                }else{
                    alert('Successful Login...');
                    setAdminVerify(true);
                    history.push({pathname:'/'});
                }
            }
        )
        .catch((error) => alert(error.message))
    }
        
        return(
            <div className='Login-body'>
            <div className="tabelOutterTag" >
                
                <div className='tabelTag'>
                    <div className='logo-css'>
                    <Avatar style={{
                            color:'black',
                            backgroundColor:'#f48fb1',
                            height:'50px',
                            width:'50px'
                            }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    </div>

                    <label className='form-header'>Administrator Login</label>
                    <div className='inputTag'>
                        <FormLabel className='label-css'>Email address</FormLabel>
                        <FormControl onChange={(e)=> setEmail(e.target.value)} type="email" size='lg' placeholder="Email" />
                    </div>
                    <div className='inputTag'>
                        <FormLabel className='label-css'>Password</FormLabel>
                        <FormControl onChange={(e)=> setPass(e.target.value)} type="password" size='lg' placeholder="Password" />
                    </div>
                    <div className='inputTag'>
                        <Button variant="contained" fullWidth={true} color="primary" onClick={submitLogin}>
                            SIGN IN
                        </Button>
                        {/* <input type="Submit" onClick={submitLogin}  /> */}
                    </div>
                </div>
            </div>
            </div>
        );
}




export default Login;
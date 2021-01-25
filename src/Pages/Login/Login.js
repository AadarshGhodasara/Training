import React  from 'react';
import './Login.css'; 
import fire  from '../../Components/firebase';
import history from '../../Components/history';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

const Login = () => {
    let email = ''
    let pass = ''

    
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
                    history.push({pathname:'/home'});
                }
            }
        )
        .catch((error) => alert(error.message))
    }
        const CssTextField = withStyles((theme)=>({
            root: {
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'yellow',
              },
              '.MuiInputBase-root':{
                // '& fieldset': {
                    color:'white'
                //   },
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  
                  borderColor: '#737373'
                },
                '&:hover fieldset': {
                    borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                },
              },
            },
          }))(TextField);
        return(
            <div>
                {/* <div className='Login-header'>
                    <h1>Header</h1>
                </div> */}
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

                    <label className='form-header'>Login</label>
                    <div className='inputTag'>
                        <CssTextField
                            defaultValue=''
                            variant="outlined"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            onChange={event => {
                                email = event.target.value;
                              }}
                            InputLabelProps={{style:{color:'white',fontSize:'500'}}}
                            InputProps={{ style:{color:"white"} }}
                            />
                    </div>
                    <div className='inputTag'>
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={event => {
                                pass = event.target.value;
                              }}
                            InputLabelProps={{style:{color:'white'}}}
                            InputProps={{ style:{color:"white"} }}
                            />
                    </div>
                    <div className='inputTag'>
                        <Button variant="contained" fullWidth={true} color="primary" onClick={submitLogin}>
                            SIGN IN
                        </Button>
                        {/* <input type="Submit" onClick={submitLogin}  /> */}
                    </div>
                    <div className='signUpLabelTag'>
                        <Link href="/SignUp" variant="body2">
                            {"Don't have an account ? Sign Up"}
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        );
    

}




export default Login;
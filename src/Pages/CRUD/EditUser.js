import axios from 'axios';
import React, {useEffect, useState} from 'react';
import history from '../../Components/history';
import {useParams} from 'react-router-dom';
export default function EditUser() {
    const {id} = useParams();
    const [user,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {name, username, email, phone, website} = user;

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async() => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
        console.log(result);
    }

    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user); 
        history.push({pathname:'/'});
    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
                    <form  onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
                </div>
        </div>
    )
}

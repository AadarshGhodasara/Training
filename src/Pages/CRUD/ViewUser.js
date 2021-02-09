import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const ViewUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async() => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`);
            setUser(result.data);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className='container py-4'>
        <Link className='btn btn-primary' to='/'>
            back to home
        </Link>
        <h1 className='display-4'>User Id :{id}</h1>
        <hr />
        <ul className='list-group w-50'>
            <li className='list-group-item'>Name : {user.name}</li>
            <li className='list-group-item'>UserName : {user.username}</li>
            <li className='list-group-item'>Email : {user.email}</li>
            <li className='list-group-item'>Phone : {user.phone}</li>
            <li className='list-group-item'>Website : {user.website}</li>
        </ul>
        </div>
    )
}

export default ViewUser;
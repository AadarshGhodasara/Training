import React , {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home() {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users");
        console.log(result);
        setUsers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
                <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr key={index+1}>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

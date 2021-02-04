import React , {useState} from 'react';
import {addToDo} from '../../component/redux/action';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
function ToDoInput() {
    let [name,setName] = useState('');
    let dispatch = useDispatch();

    return(
        <div> 
            <div className='row m-2'>
                <input 
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                    type='text' 
                    className='col form-control'/>
                <button 
                    className='btn btn-primary mx-2'
                    onClick={()=>{
                        if(name){
                        dispatch( addToDo(
                            {
                                id:uuid(),
                                name:name
                            }
                        ));
                        }
                        setName('');
                    }
                }
                >Add</button>
            </div>
        </div>
    )

}

export default ToDoInput;
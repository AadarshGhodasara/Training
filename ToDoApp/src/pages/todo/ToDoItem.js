import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, updateToDo } from '../../component/redux/action';

function ToDoItem({todo , index}) {
    let [editable , setEditable] = useState(false);
    let [name,setName] = useState(todo.name);
    let dispatch = useDispatch();
    return(
        <div>
            <div className='row mx-2 align-items-center'>
                <div >#{index}</div>
                <div className='col'>
                    {/* <h4>{todo.name}</h4> */}
                    {editable ? 
                        <input 
                            type='text' 
                            className='form-control'
                            placeholder={name} 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        /> 
                        : <h4>{todo.name}</h4>}
                </div>
                <button 
                    className='btn btn-primary m-2'
                    onClick={() => {
                        dispatch(updateToDo(
                            {
                                ...todo,
                                name:name
                            }
                        )
                        );
                        if(editable){
                            setName(name);
                        }
                        setEditable(!editable)
                    }}
                >{editable ? 'Update' : 'Edit'}</button>
                <button 
                    className='btn btn-danger m-2'
                    onClick={()=>{
                        console.log('>',name);
                        dispatch(deleteToDo(todo.id))}}
                >delete</button>
            </div>
        </div>
    )
}

export default ToDoItem;
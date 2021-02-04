import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';
function ToDoList() {
    const todos = useSelector(state => state);
    let index=0;
    return(
        <div className='my-4'>
            {
                todos.map(todo => {
                    return <ToDoItem key={todo.id} todo={todo} index={index=index+1} />
                })
            }
        </div>
    )
}

export default ToDoList;
import React , {useState , useEffect} from 'react';
import './ReactRefDemo.css';
function Counter(params) {
    const [count,setCount] = useState(0);


    // ComponentDidMount
    // useEffect(()=>{
    //     console.log('Component Mount');
    // },[]); 

    // componentDidUpdate 
    // useEffect(()=>{
    //     console.log('Component Mount');
    // },[count]);

    // componentWillUnmount
    useEffect(()=>{
        return(()=>{
            console.log('Component unmount')
        })
    },[]);

    return(
        <div className='cen'>
            <h3>Current Count : {count} </h3>
            <input type='button' value='increment the count' onClick={()=>setCount(count+1)}/>
        </div>
    )
}

export default Counter;
import React ,  { useState} from 'react';
import Counter from './Counter';
import './ReactRefDemo.css';
function ReactRefDemo() {

    const [showConter,setShowCounter] = useState(null);
    // let reactRef = useRef();    
    // const submitEvent = () => {
    //     alert(reactRef.current.value);
    // }
    return(
        <div className='cen'>
            {/* <input type='text' ref={reactRef}/> */}
            {/* <button  onClick={submitEvent} >Submit</button> */}
            <h1>Our App</h1>
            <button onClick={()=>setShowCounter(!showConter)} >{showConter ? "Hide Counter" : 'Show Counter'}</button>
            {showConter && <Counter />}
        </div>
    )
}
export default ReactRefDemo;
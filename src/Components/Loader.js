import React from 'react';
import LoaderLogo from '../loader.svg';


const Loader = ({text}) => {
    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            height:window.innerHeight
        }}>
            <img src={LoaderLogo} alt="React Logo" />
            <label style={{fontSize:'4vh'}}><strong> {text} </strong></label>
        </div>
    )
}

export default Loader;
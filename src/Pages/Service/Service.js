import React from 'react';
import './Service.css';
// import Image from 'react-bootstrap/Image'

function AboutOwner() {
    return(
        <div className='ServiceBody'>
            <div className='service-header'>
            <label className='service-header-text'><strong>Our Service</strong></label>
            </div>
            <div className='service-tag'> 
                {/* <label>Service Body</label> */}
                <div className='box-tag'>
                    {/* <img src='./clock.svg' alt="React Logo" /> */}
                </div>
                <div className='box-tag'> 
                    {/* <img src='./frame.png' alt="React Logo" /> */}
                </div>
            </div>
        </div>
    )
}

export default AboutOwner;

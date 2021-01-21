import React from 'react';
import Loader from '../../Components/Loader';
const Modal = () => {

    // const handelClick = (e) => {
    //     if(e.target.classList.contains('backdrop')){
    //     setSelectedImg(null);
    //     }
    // }

    return(
        <div style={{
            position:'fixed',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            background:'rgba(0, 0, 0, 0.5)'
        }}>
            {/* <img src={selectedImg} alt='enlarged pic' /> */}
            <Loader  text='Photo Uploading...'/>
        </div>
    )
}

export default Modal;
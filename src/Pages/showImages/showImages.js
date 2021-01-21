import React, { useState } from 'react';
import useStore from '../../Components/hooks/useStore';
import Header from '../../Components/Header/header';
import Model from './Modal';

// import './LoaderModel.css';
const ShowImages = () => {
const [ selectedImg , setSelectedImg ] = useState(null);
const { docs } = useStore('images');
console.log(docs);
    return(
        <div>
            <Header text='show images' />
            <div className='img-grid'>
                
                {/* <p>Image</p> */}
                { docs && docs.map(doc => (
                    <div className='img-wrap' key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <img src={doc.url} alt='uploaded pic' />
                    </div>
            ))}
            </div>
            { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </div>
    )
}
export default ShowImages;
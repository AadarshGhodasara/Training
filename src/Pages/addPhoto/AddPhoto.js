import React from 'react';
import './AddPhoto';
import Header from '../../Components/Header/header';
import './AddPhoto.css';
import { storage , store , timestamp } from '../../Components/firebase';
// import Loader from '../../Components/Loader';
import LoaderModel from './LoaderModel';


const types = ['image/png' , 'image/jpeg'];

class AddPhoto extends React.Component {
    constructor(props) {
        super(props);
         this.state = { 
             pictures: [] ,
             image : '',
             url : '',
             isUpload:1
        };
         this.uploadImg = this.uploadImg.bind(this);
        //  this.show = this.show.bind(this);
    }

    // show(e){
    //     console.log('IN');
    //     console.log(
    //         process.env.API_KEY,
    //         process.env.AUTH_DOMAIN,
    //         process.env.DATABASE_URL,
    //         process.env.PROJECT_ID,
    //         process.env.STORAGE_BUCKET,
    //         process.env.MESSAGING_SENDER_ID,
    //         process.env.APP_ID,
    //         process.env.MEASUREMENT_ID
    //     );
    // }

   async uploadImg(e) {
        
        const selected = e.target.files[0];
        if(e.target.files[0] && types.includes(selected.type)){
            this.setState({url:'',isUpload:0});
            var url='';
            const image = e.target.files[0];

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            const collectionRef = store.collection('images');
            uploadTask.on('state_changed',
            (snapshot) => {
                // progress function
            },
            (error) => {
                // error function
                console.log(error);
            },
            async () => {
                // complete function
                await storage.ref('images').child(image.name).getDownloadURL()
                .then((imgUrl) => {
                    console.log(imgUrl);
                    url = imgUrl;
                    this.setState({url : imgUrl});
                    // alert('Image successfully upload...')
                })
                const createAt = timestamp();
                collectionRef.add({ url , createAt });
                alert('Image successfully upload...')
                this.setState({url:'',isUpload:1});
            });
        }else{
            alert('Not Supported format...')
            this.setState({url:'',isUpload:1});
        }
        console.log('===> ',this.state.url);

    }

    render(){
        return(
            <div>
                <Header text='Add Photo' />
                { this.state.isUpload === 0  ? <LoaderModel  />  :  
                <div className='addPhoto-outter-tag'>                
                    <div className='upload-img-tag'>
                        <input 
                            // type='button'
                            type="file" 
                            name="uploadfile" 
                            // onClick={this.show}
                            onChange={this.uploadImg} 
                            id="img" 
                            style={{display:'none'}}
                        />
                        <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Upload logo" className='img-tag' />
                        <div className='btn-tag'>
                            <div className='upload-btn'>
                                <label 
                                    className='upload-btn-text' 
                                    htmlFor="img">
                                        Upload Image
                                </label>
                            </div>

                        </div>
                        
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default AddPhoto;



    
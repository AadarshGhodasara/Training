import React from 'react';
import './AddFramePhoto.css';
import { storage , store , timestamp  } from '../../Components/Firebase';
import LoaderModel from '../../Components/Loader/LoaderModal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/DeleteForeverRounded';
import AddPhotoHeader from './AddPhotoHeader';
const types = ['image/png' , 'image/jpeg'];


class AddPhoto extends React.Component {
    constructor(props) {
        super(props);
         this.state = { 
             pictures: [] ,
             image : '',
             frameUrl:'',
             imageId:null,
             isUpload:null,
             isDelete:null
        };
    }


    uploadFrameImg = (e) => {
        const selected = e.target.files?.[0];
        if(selected && types.includes(selected.type)){
            this.setState({frameUrl:'',isUpload:1});
            let CollectionUrl='';
            const image = e.target.files[0];
            const uploadTask = storage.ref(`Frame/${image.name}`).put(image);
            const collectionRef = store.collection('Frame');
            uploadTask.on('state_changed',
            (snapshot) => {
                // progress function
            },
            (error) => {
                // error function
                console.log(error);
            },
             () => {
                // complete function
                storage.ref('Frame').child(image.name).getDownloadURL()
                .then((imgUrl) => {
                    console.log(imgUrl);
                    CollectionUrl = imgUrl;
                    this.setState({frameUrl : imgUrl});
                    console.log('***->',CollectionUrl);
                    // alert('Image successfully upload...')
                })
                const createAt = timestamp();
                collectionRef.add({ CollectionUrl , createAt }).then(
                    (docRef) => {
                        this.setState({imageId : docRef.id});
                        console.log('IDDD =>',this.state.imageId,CollectionUrl);
                    }
                );
                alert('Image successfully upload...')
                this.setState({isUpload:null});
            });
        }else{
            alert('Not Supported format...')
            this.setState({frameUrl:'',isUpload:null});
        }
    }

    deleteImg = () => {
        if( this.state.frameUrl){
            this.setState({isDelete:1});
            // storage.refFromURL
            store.collection('Frame').doc(this.state.imageId).delete().then(()=>{
                console.log('delete');
            }).catch((err)=>{
                console.log(err);
            })
            let image = storage.refFromURL(this.state.frameUrl);
            image.delete().then(() => {
                this.setState({isDelete:null , frameUrl:'',imageId:null});
                // collectionRef.
                console.log('delete');
            }).catch((error) => {
                console.log(error.message);
            })
        }
    }

    render(){
        const {isUpload , isDelete , frameUrl } = this.state;
        return(
            <>
                <AddPhotoHeader text='Add Frame Photo' Clock={false} />            
                <div className='addFramePhoto-body'>
                    <div className='addFramePhoto-outter-tag'>              
                        <div className='frame-img-tag'>
                            <input 
                                type="file" 
                                name="uploadfile" 
                                onChange={this.uploadFrameImg} 
                                id="frameimg" 
                                style={{display:'none'}}
                            />
                            <input 
                                type="button" 
                                onClick={this.deleteImg} 
                                id="framedel" 
                                style={{display:'none'}}
                            />  
                            <div className='showFrame-img-tag'>
                                <img src={frameUrl || 'https://via.placeholder.com/400x300'} alt="Upload logo" className={frameUrl ? 'frameImg-tag' : 'defaultFrame-img-tag'} />
                            </div>                      
                            <div className='btn-tag'>
                                    <Button 
                                        className='uploadFrame-btn' 
                                        variant="contained" 
                                        color="primary"
                                        startIcon={<AddIcon />}
                                    >
                                        <label className='btn-text-css' htmlFor="frameimg">Add</label>
                                    </Button>
                                <Button 
                                        className='uploadFrame-btn' 
                                        variant="contained" 
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        <label className='btn-text-css' htmlFor='framedel' >Delete</label>
                                    </Button>
                            </div>
                        </div>
                    </div>
                    { isUpload && <LoaderModel text='Photo Uploading...'  /> }
                    { isDelete && <LoaderModel text='Photo Deleteing...'  /> }
                </div>
            </>
        );
    }
}

export default AddPhoto;



    
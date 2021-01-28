import React from 'react';
// import './AddPhoto';
// import Header from '../../Components/Header/Header';
import './AddPhoto.css';
import { storage , store , timestamp  } from '../../Components/Firebase';
import LoaderModel from '../../Components/Loader/LoaderModal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/DeleteForeverRounded';
const types = ['image/png' , 'image/jpeg'];

class AddFramePhoto extends React.Component {
    constructor(props) {
        super(props);
         this.state = { 
             pictures: [] ,
             image : '',
             url : '',
             imageId:null,
             isUpload:null,
             isDelete:null
        };
    }


      uploadImg = (e) => {
        
        const selected = e.target.files[0];
        if(e.target.files?.[0] && types.includes(selected.type)){
            this.setState({url:'',isUpload:1});
            let url='';
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
                    url = imgUrl;
                    this.setState({url : imgUrl});
                    // alert('Image successfully upload...')
                })
                const createAt = timestamp();
                collectionRef.add({ url , createAt }).then(
                    (docRef) => {
                        this.setState({imageId : docRef.id});
                        console.log('IDDD =>',this.state.imageId);
                    }
                );
                alert('Image successfully upload...')
                this.setState({isUpload:null});
            });
        }else{
            alert('Not Supported format...')
            this.setState({url:'',isUpload:null});
        }
        console.log('===> ',this.state.url);

    }

    deleteImg = () => {
        console.log('del');
        if( this.state.url !== '' ){
            this.setState({isDelete:1});
            // storage.refFromURL
            store.collection('Frame').doc(this.state.imageId).delete().then(()=>{
                console.log('delete');
            }).catch((err)=>{
                console.log(err);
            })
            let image = storage.refFromURL(this.state.url);
            image.delete().then(() => {
                this.setState({isDelete:null , url:'',imageId:null});
                // collectionRef.
                console.log('delete');
            }).catch((error) => {
                console.log(error.message);
            })
        }
    }

    render(){
        const {isUpload , isDelete} = this.state;
        return(
            <div>
                {/* <Header text='Add Photo' /> */}
                <h1> Add Photo </h1>
                {/* { this.state.isUpload === 0  ? <LoaderModel  />  :   */}
                <div className='addPhoto-outter-tag'>                
                    <div className='upload-img-tag'>
                        <input 
                            type="file" 
                            name="uploadfile" 
                            onChange={this.uploadImg} 
                            id="img" 
                            style={{display:'none'}}
                        />
                        <input 
                            type="button" 
                            onClick={this.deleteImg} 
                            id="del" 
                            style={{display:'none'}}
                        />                        
                        <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Upload logo" className='img-tag' />
                        <div className='btn-tag'>
                                <Button 
                                    className='upload-btn' 
                                    variant="contained" 
                                    color="primary"
                                    startIcon={<AddIcon />}
                                >
                                    <label style={{width:'100%'}} htmlFor="img">Add</label>
                                </Button>
                                <Button 
                                    className='upload-btn' 
                                    variant="contained" 
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                >
                                    <label style={{width:'100%'}} htmlFor='del' >Delete</label>
                                </Button>
                        </div>
                    </div>
                </div>
                { isUpload && <LoaderModel text='Photo Uploading...'  /> }
                { isDelete && <LoaderModel text='Photo Deleteing...'  /> }
            </div>
        );
    }
}

export default AddFramePhoto;



    
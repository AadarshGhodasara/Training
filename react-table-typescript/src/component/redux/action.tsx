import axios from 'axios';

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

const fetchDataRequest = () => {
    return{
        type:FETCH_DATA_REQUEST
    }
}
const fetchDataSuccess = (data:any) => {
    return{
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
}
const fetchDataFailure = (error:any) => {
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
    }
}

export const fetchData = (limit:any,start:any) => {
    return(dispatch:any) => {
        dispatch(fetchDataRequest);
        let Object = {
            params: {
            _limit:limit,
            _start:start,
            }
        }; 
        axios.get('https://jsonplaceholder.typicode.com/comments/',Object).then(response => {
            const users = response.data;
            dispatch(fetchDataSuccess(users));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchDataFailure(errorMsg));
        })
    }
}
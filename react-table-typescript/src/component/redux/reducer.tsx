
interface IAppState {
    loading?: boolean|undefined,
    data?:any[]|undefined,
    error?:string|undefined
  }


const initialState:IAppState= {
    loading : false,
    data:[],
    error:''
}
const  reducer =  (state=initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            state={
                ...state,
                loading:true
            }
            return state;
        case 'FETCH_DATA_SUCCESS':
            state={
                ...state,
                data:action.payload,
                error:''
            }
            return state;
        case 'FETCH_DATA_FAILURE':
            state={
                ...state,
                data:[],
                error:action.payload
            }
            return state;
        default:
            return state;
    }
}

export default reducer;
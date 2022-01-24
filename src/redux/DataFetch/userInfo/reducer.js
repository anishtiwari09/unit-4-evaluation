import { actionType } from "./actionType";

const initialState={
    isLoading:false,
    isError:false,
    datas:[]
}
export function userInfoReducer(state=initialState,action){
switch(action.type){
    case actionType.GET_USER_DATA_REQUEST:{
        return {
            ...state,isLoading:true,isError:false
        }
    }
    case actionType.GET_USER_DATA_FAILURE:{
        return {
            ...state,isLoading:false,isError:true
        }
    }
    case actionType.GET_USER_DATA_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false,datas:action.payload.datas   
        }
    }
    default:{
        return state
    }
}
}
import { actionConstrait } from "./actionType";


const initialState={
    isLoading:false,
    isError:false,
    datas:[]
}

export function PostReducer(state=initialState,action){
    switch(action.type){
        case actionConstrait.POST_REQUEST:{
            return {
                ...state,isLoading:true,

            }
        }
        case actionConstrait.POST_FAILURE:{
            return {
                ...state,isError:true,

            }
        }
        case actionConstrait.POST_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false

            }
        }
        case actionConstrait.GET_REQUEST:{
            return {
                ...state,isLoading:true,

            }
        }
        case actionConstrait.GET_FAILURE:{
            return {
                ...state,isError:true,

            }
        }
        case actionConstrait.GET_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false,datas:action.payload.datas

            }
        }
        case actionConstrait.TOGGLE_STATUS_SUCCESS:{
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}
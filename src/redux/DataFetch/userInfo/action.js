import { actionType } from "./actionType"

export const getUserInfoRequest=()=>({
    type:actionType.GET_USER_DATA_REQUEST,
    payload:{
        isLoading:true,
        isError:false
    }

})
export const getUserInfoFailure=()=>({
    type:actionType.GET_USER_DATA_FAILURE,
    payload:{
        isLoading:false,
        isError:true
    }

})
export const getUserInfoSuccess=(datas)=>({
    type:actionType.GET_USER_DATA_SUCCESS,
    payload:{
        isLoading:false,
        isError:false,
        datas:datas
    }

})
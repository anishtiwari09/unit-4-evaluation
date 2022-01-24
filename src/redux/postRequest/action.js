import { actionConstrait } from "./actionType";

export const postRequest=()=>({
    type:actionConstrait.POST_REQUEST
})
export const postFailure=()=>({
    type:actionConstrait.POST_FAILURE
})
export const postSuccess=()=>({
    type:actionConstrait.POST_SUCCESS
})
export const getRequest=()=>({
    type:actionConstrait.GET_REQUEST
})
export const getFailure=()=>({
    type:actionConstrait.GET_FAILURE
})
export const getSuccess=(datas)=>({
    type:actionConstrait.GET_SUCCESS,
    payload:{
        datas:datas
    }
})
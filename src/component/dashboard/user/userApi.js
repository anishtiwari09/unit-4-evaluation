import { getUserInfoFailure, getUserInfoRequest, getUserInfoSuccess } from "../../../redux/DataFetch/userInfo/action"


export const fetchUserInfo=()=>(dispatch)=>{
    dispatch(getUserInfoRequest())
    return fetch("http://localhost:3004/users").then(res=>res.json()).then(res=>{
        //console.log(res)
        return dispatch(getUserInfoSuccess(res))
    }).catch(err=>{
        dispatch(getUserInfoFailure())
    })
}
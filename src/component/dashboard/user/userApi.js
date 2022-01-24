import { getUserInfoFailure, getUserInfoRequest, getUserInfoSuccess } from "../../../redux/DataFetch/userInfo/action"


export const fetchUserInfo=(query=null)=>(dispatch)=>{
    let url="http://localhost:3004/users"
    if(query)
    {
        url+=query
        console.log('query',query)
    }
    dispatch(getUserInfoRequest())
    return fetch(url).then(res=>res.json()).then(res=>{
        //console.log(res)
        return dispatch(getUserInfoSuccess(res))
    }).catch(err=>{
        dispatch(getUserInfoFailure())
    })
}
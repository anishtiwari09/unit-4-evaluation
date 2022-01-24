import axios from "axios"
import { getFailure, getRequest, getSuccess, postFailure, postRequest, postSuccess } from "./action"

export const PostApi=(ids)=>(dispatch)=>{
    dispatch(postRequest())
    const datasInfo={
    purpose:datas.purpose,
    userId:datas.userId,
    date: Date.parse(datas.date),
    amount:datas.amount,
    status:"pending"
}
const config ={
    url:'http://localhost:3004/userInfo',
    method:'post',
    data: datasInfo
}
return axios(config).then(()=>{dispatch(postSuccess())
dispatch(getApi(ids))

}).catch(()=>dispatch(postFailure()))

}

export const getApi=(ids)=>(dispatch)=>{
    dispatch(getRequest())
    return fetch(`http://localhost:3004/userInfo?userId=${ids}`).then(res=>res.json()).then(res=>{
        dispatch(getSuccess(res))
    }).catch(()=>dispatch(getFailure()))
}
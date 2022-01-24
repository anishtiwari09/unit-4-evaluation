import axios from "axios"
import { getFailure, getRequest, getSuccess, postFailure, postRequest, postSuccess, toggleStatusSuccess } from "./action"

export const PostApi=(datas)=>(dispatch)=>{
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
return axios(config).catch(()=>dispatch(postFailure()))

}

export const getApi=(ids=null)=>(dispatch)=>{

    let urls="http://localhost:3004/userInfo"
    if(ids)
    urls=`http://localhost:3004/userInfo?userId=${ids}`
    dispatch(getRequest())
    return fetch(urls).then(res=>res.json()).then(res=>{
        dispatch(getSuccess(res))
    }).catch(()=>dispatch(getFailure()))
}

export const handleToggleStatus=(id,status)=>(dispatch)=>{
    dispatch(toggleStatusSuccess())
    console.log('handle',id,status)
    const config = {
        url: `http://localhost:3004/userInfo/${id}`,
        method: "patch",
        data: {
          status:status
        }

}
return axios(config)
}
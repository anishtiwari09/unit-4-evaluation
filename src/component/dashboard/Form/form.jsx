import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getApi, PostApi } from "../../../redux/postRequest/Postapi";
import { FlexBox } from "../user/user";
import { fetchUserInfo } from "../user/userApi";
const CreateForm=({handleUserDataSubmit,setState})=>{
    const [userData,setUserData]=useState({
        name:"",
        date:"2022-01-22",
        purpose:"",
        amount:0,
        status:0
    })
const handleInputChange=(e)=>{
const {value,name}=e.target
setUserData({...userData,[name]:value})
}
const handleSubmit=()=>{
    for(let key in userData){
        if(!userData[key] && key!='status')
        {
            alert('please fill all field')
            return
        }
    }
    handleUserDataSubmit(userData)
    setState(false)
}
    return <div>
       <FlexBox >
           <div><label>Name:</label></div>
           <div><input type="text" name="name" value={userData.name} onChange={handleInputChange}/></div>
       </FlexBox>
       <FlexBox>
           <div><label>Date of Claim</label></div>
           <div><input type="Date" name="date" value={userData.date}onChange={handleInputChange}/></div>
       </FlexBox>
       <FlexBox>
           <div><label>Purpose Of Claim</label></div>
           <div><input type="text" name="purpose" value={userData.purpose}onChange={handleInputChange}/></div>
       </FlexBox>
       <FlexBox>
           <div><label>Amount</label></div>
           <div><input type="number" name="amount" value={userData.amount} onChange={handleInputChange}/></div>
       </FlexBox>
       <div><button onClick={handleSubmit}>Submit</button></div>
    </div>
}
export default function Form()
{
    const dispatch=useDispatch()
    const {id}=useParams()
    const userData=useSelector(state=>state.userInfo)
    const {datas,isLoading,isError}=useSelector(state=>state.postApi)
    const [state,setState]=useState(false)
    const handleUserData=(datas)=>{
        const config={
            userId:id,
            date:datas.date,
            amount:datas.amount,
            purpose:datas.purpose
        }
        dispatch(PostApi(config)).then(()=>{
            dispatch(getApi(id))
        })
       
        console.log('get')
    }
    useEffect(()=>{
       
let url='?id='+id
dispatch(fetchUserInfo(url))
dispatch(getApi(id))

    },[])
    if(isLoading)
    return <h3>loading...</h3>
    return <Box sx={{justifyContent:"left"}}>
        <h3>{userData?.datas[0]?.name}</h3>
        <Box sx={{float:"right",margin:"4rem"}}>
<Button variant="contained" onClick={()=>setState(true)}>Create Form to Add reimbursement</Button>
</Box>
{state && <Box sx={{clear:'both'}}>
<CreateForm handleUserDataSubmit={handleUserData} setState={setState}/>
</Box>}
{Boolean(datas.length)&&<Box sx={{clear:"both",margin:"0 20rem"}}>
    <table border="1" style={{cellPadding:'1rem'}}>
        <thead>
            <th>Sr.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Purpose</th>
            <th>Status</th>
        </thead>
        {datas.map((item,i)=><tr>
            <td>{i+1}</td>
            <td>{userData?.datas[0]?.name}</td>
            <td>{item.date}</td>
            <td>{item.purpose}</td>
            <td>{item.status}</td>
        </tr>)}
    </table>
    
    </Box>}
    </Box>
}
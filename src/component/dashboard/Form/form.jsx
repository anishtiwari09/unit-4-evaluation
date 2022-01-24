import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FlexBox } from "../user/user";
const CreateForm=({handleUserDataSubmit})=>{
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
        if(!userData[key])
        {
            alert('please fill all field')
            return
        }
    }
    handleUserDataSubmit(userData)
}
    return <div><form>
       <FlexBox onSubmit={handleSubmit}>
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
       <div><input type="submit" value="submit"/></div>
    </form></div>
}
export default function Form()
{
    return <Box sx={{justifyContent:"left"}}>
        <Box sx={{float:"right",margin:"4rem"}}>
<Button variant="contained" onClick>Create Form to Add reimbursement</Button>
</Box>
<Box sx={{clear:'both'}}>
<CreateForm />
</Box>
    </Box>
}
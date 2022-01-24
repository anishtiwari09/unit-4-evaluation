import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getApi, handleToggleStatus } from "../../../redux/postRequest/Postapi"
import { fetchUserInfo } from "../user/userApi"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from "react"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  gap:"1rem"
};
export default function BasicModal({open,setOpen,id,handleStatusChanged}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status,setStatus]=useState("reject")
  const handleChange=(e)=>{
      setStatus(e.target.value)
  }
  const handleSubmit=()=>{
      handleClose()
      handleStatusChanged(id,status)
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={status}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value="reject">Reject</MenuItem>
    <MenuItem value="in progress">In progress</MenuItem>
    <MenuItem value="settled">Settled</MenuItem>
  </Select>
</FormControl>
<button onClick={handleSubmit}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}

export function AdminPage(){

    const userName=useSelector(state=>state.userInfo)
    const userDatas=userName.datas
    const {isLoading,isError,datas}=useSelector(state=>state.postApi)
    const dispatch=useDispatch()
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
        dispatch(fetchUserInfo())
        dispatch(getApi())
    },[])
const [activeId,selectActiveId]=useState("")
    const handleStatusChanged=(id,status)=>{
    dispatch(handleToggleStatus(id,status)).then(()=>
    dispatch(getApi())
    )

    }
    return <div>
      <Box sx={{clear:"both",margin:"0 20rem",cursor:'pointer'}}>
    <table border="1" style={{cellPadding:'1rem'}}>
        <thead>
            <th>Sr.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Purpose</th>
            <th>Status</th>
        </thead>
        {datas.map((item,i)=><tr onClick={()=>{setOpen(true);selectActiveId(item.id)}}>
            <td>{i+1}</td>
            <td>{userDatas.filter((usrs)=>usrs.id==item.userId)[0]?.name}</td>
            <td>{item.date}</td>
            <td>{item.purpose}</td>
            <td>{item.status}</td>
        </tr>)}
    </table>
    
    </Box>
<BasicModal key='none1' open={open} setOpen={setOpen} handleStatusChanged={handleStatusChanged} id={activeId}/>
    </div>
}
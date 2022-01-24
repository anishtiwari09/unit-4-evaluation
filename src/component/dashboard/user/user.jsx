import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchUserInfo } from "./userApi"
import styled from "styled-components"
import { Link } from "react-router-dom"
export const FlexBox=styled.div`
display:flex;
margin:1rem;
justify-content:center;
flex-direction:${props=>{ 
    console.log(props.direction)
    return props.direction?props.direction:"row"}};
gap:1rem;

`

const CreateCard=({id,name})=>
{
    return <div>
        <Link to={`/dashboard/user/${id}`}>
       <FlexBox>
            <div>{id}</div>
            <div>{name}</div>
       </FlexBox>
        
        </Link>
        </div>
}
export default function UserInfo(){
    const dispatch=useDispatch()
    const {isLoading,isError,datas}=useSelector(state=>state.userInfo)
    useEffect(()=>{
        dispatch(fetchUserInfo())

    },[])
   return <>
   <FlexBox direction="column">
    {datas.map((item)=><CreateCard id={item.id} name={item.name} key={item.id} />)}
   </FlexBox>
   </>
   
}
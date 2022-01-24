import { Link } from "react-router-dom";
import { FlexBox } from "./dashboard/user/user";

export default function Navbar(){
    return <>
    <FlexBox>
        <div><Link to="/dashboard/user">User</Link></div>
        <div><Link to="/dashboard/admin">Admin</Link></div>
    </FlexBox>
    </>
}
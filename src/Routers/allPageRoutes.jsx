import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Form from "../component/dashboard/Form/form";
import UserInfo from "../component/dashboard/user/user";
import Navbar from "../component/Navbar";

export function AllPageRoute(){
   return <div>
        <Switch>
            <Route exact path="/"><h3>Home</h3></Route>
            <Route exact path="/dashboard/admin"><h1>admin</h1></Route>
            <Route exact path="/dashboard/user"><UserInfo /></Route>
            <Route exact path="/dashboard/user/:id"><Form /></Route>
        </Switch>
    </div>
}
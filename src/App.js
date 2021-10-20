import Login from "./Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingUp from "./SignUp/SignUp";

export default function App(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <Login/>
            </Route>
            <Route path='/singup' exact>
                <SingUp/>
            </Route>
        </Switch>
        </BrowserRouter>
        
    );
}
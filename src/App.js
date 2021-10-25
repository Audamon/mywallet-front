import Login from "./Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingUp from "./SignUp/SignUp";
import { LoggedUser } from './Services/Context/LoggedUser.js'
import { useState, useEffect } from "react";
import { getStoredUser } from "./Services/Api/Api";
import Wallet from "./Wallet/Wallet";
import TransactionIn from "./Wallet/TransactionIn";
import TransactionOut from "./Wallet/TransactionOut";

export default function App() {
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        const user = getStoredUser()
        setLoggedUser(user)

    }, [])
    return (
        <LoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/signup' exact>
                        <SingUp />
                    </Route>
                    <Route path='/wallet' exact>
                        <Wallet/>
                    </Route>
                    <Route path='/transaction/in' exact>
                        <TransactionIn/>
                    </Route>
                    <Route path='/transaction/out' exact>
                        <TransactionOut/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </LoggedUser.Provider>
    );
}
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login/Login';
import SingUp from './SignUp/SignUp';
import { LoggedUser } from './Services/Context/LoggedUser.js';
import { getStoredUser } from './Services/Api/Api';
import Wallet from './Wallet/Wallet';
import TransactionIn from './Wallet/TransactionIn';
import TransactionOut from './Wallet/TransactionOut';

export default function App() {
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    const user = getStoredUser();
    setLoggedUser(user);
  }, []);
  return (
    <LoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/signup" exact element={<SingUp />}></Route>
          <Route path="/wallet" exact element={<Wallet />}></Route>
          <Route
            path="/transaction/in"
            exact
            element={<TransactionIn />}
          ></Route>
          <Route
            path="/transaction/out"
            exact
            element={<TransactionOut />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </LoggedUser.Provider>
  );
}

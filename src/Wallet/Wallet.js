import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import {
  Bottom, WalletPage, Top, LogOutButton,
} from './Wallet_style.js';
import { getStoredUser, getTransactions, logout } from '../Services/Api/Api.js';
import Transactions from './Transactions.js';
import { LoggedUser } from '../Services/Context/LoggedUser.js';

export default function Wallet() {
  const { loggedUser } = useContext(LoggedUser);
  const history = useNavigate();
  const [transactionsData, setTransactionsData] = useState({});
  function updateTransactionsArray(response) {
    setTransactionsData(response.data);
  }
  useEffect(() => {
    const { token } = getStoredUser();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getTransactions(config).then(updateTransactionsArray);
  }, []);

  function newIn() {
    const { token } = getStoredUser();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getTransactions(config).then(updateTransactionsArray);
  }
  function newOut() {
    const { token } = getStoredUser();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getTransactions(config).then(updateTransactionsArray);
  }
  function logOut() {
    const body = { ...loggedUser };
    logout(body);
    localStorage.clear();
    history('/');
  }

  return (
    <WalletPage>
      <Top>
        Olá, {loggedUser.name}
        <LogOutButton onClick={logOut}>
          <IoExitOutline />
        </LogOutButton>
      </Top>
      <Transactions
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
      />
      <Bottom>
        <Link to="/transaction/in">
          <button onClick={newIn}>
            <BiPlusCircle />
            <div>
              Nova <br /> entrada
            </div>
          </button>
        </Link>
        <Link to="/transaction/out">
          <button onClick={newOut}>
            <BiMinusCircle />
            <div>
              Nova
              <br /> saida
            </div>
          </button>
        </Link>
      </Bottom>
    </WalletPage>
  );
}

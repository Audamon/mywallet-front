import { useState, useContext, useEffect } from "react";
import { LoggedUser } from '../Services/Context/LoggedUser.js'
import { IoExitOutline } from 'react-icons/io5'
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import { Bottom, WalletPage, Top, LogOutButton } from './Wallet_style.js'
import { useHistory } from "react-router";
import { getStoredUser, getTransactions, logout } from "../Services/Api/Api.js";
import Transactions from "./Transactions.js";
import { Link } from "react-router-dom";


export default function Wallet() {
    const { loggedUser } = useContext(LoggedUser);
    const history = useHistory();
    const [transactionsData, setTransactionsData] = useState({});
    //const [balance, setBalance] = useState(0.00);

    function updateTransactionsArray(response) {
        if (!response.data.transactions.length) {
        }
        setTransactionsData({...response.data})
        //setBalance(Number((response.data.totalBalance / 100)).toFixed(2))
    }

    useEffect(() => {
        const token = getStoredUser().token;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        getTransactions(config)
        .then(updateTransactionsArray)

    }, [])

    function newIn() {
        const token = getStoredUser().token;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        getTransactions(config)
            .then(updateTransactionsArray);

    }
    function newOut() {
        const token = getStoredUser().token;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        getTransactions(config)
            .then(updateTransactionsArray)
    }
    function logOut() {
        const body = { ...loggedUser };
        logout(body);
        localStorage.clear();
        history.push('/');
    }



    return (
        <WalletPage>
            <Top>
                Olá, {loggedUser.name}
                <LogOutButton onClick={logOut}>
                    <IoExitOutline />
                </LogOutButton>
            </Top>
            <Transactions transactionsData={transactionsData}  setTransactionsData={setTransactionsData} />
            <Bottom>
                <Link to='/transaction/in'>
                    <button onClick={newIn}>
                        <BiPlusCircle />
                        <div>
                            Nova <br />     entrada
                        </div>
                    </button>
                </Link>
                <Link to='/transaction/out'>
                <button onClick={newOut}>
                    <BiMinusCircle />
                    <div>
                        Nova<br /> saida
                    </div>
                </button>
                </Link>
            </Bottom>
        </WalletPage>
    )
}

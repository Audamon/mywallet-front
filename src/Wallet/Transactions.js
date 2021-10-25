import {  useEffect, useState } from 'react';
import { getTransactions, getStoredUser } from '../Services/Api/Api.js';
import { TransactionsHistory, Value, Date, Description, TextLeft, Row, BalanceBar, Balance } from './Wallet_style.js'

export default function Transactions({ transactionsData, setTransactionsData}) {
    const [balance, setBalance] = useState(0.00);
    useEffect(()=>{
        const token = getStoredUser().token;
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
        setBalance(Number((transactionsData.totalBalance / 100)).toFixed(2))
        getTransactions(config)
            .then(res=>setTransactionsData({...res.data}))
    },[balance, transactionsData.totalBalance])
       
    if (transactionsData.transactions === undefined || transactionsData.transactions.length === 0) {
        return (
            <TransactionsHistory>
                Não há registro de transações
            </TransactionsHistory>
        );
    } else {
        return (
            <TransactionsHistory>
                {transactionsData.transactions.map((t, index) =>
                    <Row key={index}>
                        <>
                            <TextLeft>
                                <Date>{t.date}</Date>
                                <Description>{t.description}</Description>
                            </TextLeft>
                            
                            <Value color={t.operationOut === true ? '#C70000 ' : '#03AC00'}>{(t.value / 100).toFixed(2)}</Value>
                        </>
                    </Row>
                )}
            
                <BalanceBar>Saldo   <Balance >{balance}</Balance></BalanceBar>
            </TransactionsHistory>
        );
    }
}
import { useState } from "react";
import { TransactionPage, Form, Input, Button } from './TransactionOut_style';
import { useHistory } from "react-router";
import { getStoredUser, sendTransactionOut } from "../Services/Api/Api.js";

export default function TransactionOut() {
    const [value, setValue] = useState('');
    const history = useHistory();
    const [description, setDescription] = useState('');
    function sendOutData(e) {
        e.preventDefault();
        const token = getStoredUser().token;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const valueNumber = Number(value) * 100
        console.log(typeof valueNumber)
        const body = {
            value: valueNumber,
            description
        }
        sendTransactionOut(config, body);
        history.push('/wallet')
    }

    return (
        <TransactionPage>
            Nova Saída
            <Form onSubmit={sendOutData}>
                <Input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder=' Valor'></Input>
                <Input type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder=' Descrição'></Input>
                <Button type='submit'>Salvar Saída</Button>
            </Form>
        </TransactionPage>
    );

}
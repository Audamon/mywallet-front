import { useState } from "react";
import {TransactionPage, Form, Input, Button} from './TransactionOut_style.js'
import { useHistory } from "react-router";
import { getStoredUser, sendTransactionIn } from "../Services/Api/Api.js";
export default function TransactionIn(){
    const [ value, setValue] = useState('');
    const history = useHistory();
    const [description, setDescription]= useState('');
    function sendInData(e){
        e.preventDefault();
        const token = getStoredUser().token;
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
       
        const valueNumber = Number(value)*100
        const body={
            value:valueNumber,
            description
        }
        sendTransactionIn(config, body);
        history.push('/wallet')
    }

    return (
        <TransactionPage>
            Nova Entrada
            <Form onSubmit={sendInData}>
                <Input type='text' value={value} onChange={e=>setValue(e.target.value)} placeholder=' Valor'></Input>
                <Input type='text' value={description} onChange={e=>setDescription(e.target.value)} placeholder=' Descrição'></Input>
                <Button type='submit'>Salvar Entrada</Button>
            </Form>
        </TransactionPage>
    );
}


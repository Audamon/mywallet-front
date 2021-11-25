import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TransactionPage,
  Form,
  Input,
  Button,
} from './TransactionOut_style.js';
import { getStoredUser, sendTransactionIn } from '../Services/Api/Api.js';

export default function TransactionIn() {
  const [value, setValue] = useState('');
  const history = useNavigate();
  const [description, setDescription] = useState('');
  function sendInData(e) {
    e.preventDefault();
    const { token } = getStoredUser();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const valueNumber = Number(value) * 100;
    console.log(Number.isNaN(valueNumber));
    if (Number.isNaN(valueNumber)) {
      alert('Insira um valor Numerico');
      return;
    }
    const body = {
      value: valueNumber,
      description,
    };
    sendTransactionIn(config, body);
    history('/wallet');
  }

  return (
    <TransactionPage>
      Nova Entrada
      <Form onSubmit={sendInData}>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" Valor"
        ></Input>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=" Descrição"
        ></Input>
        <Button type="submit">Salvar Entrada</Button>
      </Form>
    </TransactionPage>
  );
}

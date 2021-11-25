import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { login, getStoredUser, storeUser } from '../Services/Api/Api.js';
import { LoggedUser } from '../Services/Context/LoggedUser.js';
import {
  LoginPage, Form, Input, Button,
} from './Login_style.js';

export default function Login() {
  const { setLoggedUser } = useContext(LoggedUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      history('/wallet');
    } else {
      history('/');
    }
  }, [history]);

  function SendLoginData(e) {
    e.preventDefault();
    setDisabled(true);
    if (email === '' || password === '') {
      alert('Preencha todos os campos do login');
      setDisabled(false);
    } else {
      const body = {
        email,
        password,
      };
      const promise = login(body, setDisabled);
      promise.then((res) => {
        setDisabled(false);
        const user = {
          token: res.data.token,
          name: res.data.name,
          balance: res.data.balance,
        };
        storeUser(user);
        setLoggedUser(user);
        history('/wallet');
      });
    }
  }
  return (
    <LoginPage>
      MyWallet
      <Form onSubmit={SendLoginData}>
        <Input
          type="text"
          placeholder=" E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        ></Input>
        <Input
          type="password"
          placeholder=" Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
        ></Input>
        <Button type="submit" disabled={disabled}>
          Entrar
        </Button>
      </Form>
      <Link to="/signup">Primeira vez? Cadastres-se</Link>
    </LoginPage>
  );
}

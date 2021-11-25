import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredUser, signUp } from '../Services/Api/Api.js';
import {
  SignUpPage, Form, Input, Button,
} from './SignUp_style.js';

export default function SingUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      history('/wallet');
    } else {
      history('/signup');
    }
  }, [history]);
  function SendSignUpData(e) {
    console.log('ok');
    e.preventDefault();
    setDisabled(true);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      alert(
        'Senha Inválida! A Senha deve conter no minimo 8 caracteres, letras maiúsculas, letras minúsculas, números e caracteres especiais',
      );
      setDisabled(false);
      return;
    }
    if (password !== passwordConfirm) {
      alert('As senhas devem ser iguais!');
      setDisabled(false);
    } else {
      const body = {
        username,
        email,
        password,
      };
      const promise = signUp(body, setDisabled);
      promise.then(() => {
        setDisabled(false);
        history('/');
      });
    }
  }

  return (
    <SignUpPage>
      MyWallet
      <Form onSubmit={SendSignUpData}>
        <Input
          type="text"
          placeholder=" Nome"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={disabled}
        ></Input>
        <Input
          type="email"
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
        <Input
          type="password"
          placeholder=" Confirme a senha"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          disabled={disabled}
        ></Input>
        <Button type="submit" disabled={disabled}>
          Cadastrar
        </Button>
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </SignUpPage>
  );
}

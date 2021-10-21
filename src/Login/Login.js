
import { Link } from 'react-router-dom'
import {LoginPage, Form, Input, Button} from './Login_style.js'

export default function Login() {
    return (
        <LoginPage>
            MyWallet
            <Form>
                <Input placeholder=' E-mail' required></Input>
                <Input placeholder=' Senha' required></Input>
                <Button>Entrar</Button>
            </Form>
            <Link to='/singup'>Primeira vez? Cadastres-se</Link>
            
        </LoginPage>
    );
}


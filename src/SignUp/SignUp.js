import {SignUpPage, Form, Input, Button} from './SignUp_style.js'
import { Link } from 'react-router-dom';


export default function SingUp(){
    return(
        <SignUpPage>
            MyWallet
            <Form>
                <Input placeholder=' Nome' required></Input>
                <Input placeholder=' E-mail' required></Input>
                <Input placeholder=' Senha' required></Input>
                <Input placeholder=' Confirme a senha' required></Input>
                <Button>Cadastrar</Button>
            </Form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </SignUpPage>
    );
}
import styled from "styled-components";

const SignUpPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
    height: 100vh;
    font-family: 'Saira Stencil One', cursive;
    color: #ffffff;
    font-size: 32px;
    a{
        font-size: 15px;
        font-family: 'Raleway', sans-serif;
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;

    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Input = styled.input`
    border: none;
    margin-bottom: 15px;
    height: 40px;
    border-radius: 4px;
    ::placeholder{
        font-size: 24px;
        color: #000000;
        font-family: 'Raleway', sans-serif;
        
    }
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #A328D6;
    color: #ffffff;
    font-size: 24px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`
export {SignUpPage, Form, Input, Button}
import styled from "styled-components";

const TransactionPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #8C11BE;
    height: 100vh;
    padding: 25px 25px 0 25px ;
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    color: #ffffff;
    font-weight:700 ;
` 
const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 40px;
    margin-bottom: 10px;
`
const Input = styled.input`
    border: none;
    margin-bottom: 15px;
    height: 50px;
    width: 100%;
    border-radius: 4px;
    ::placeholder{
        font-size: 22px;
        color: #000000;
        font-family: 'Raleway', sans-serif;
        
    }
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: #A328D6;
    color: #ffffff;
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`

export {TransactionPage, Form, Input, Button}
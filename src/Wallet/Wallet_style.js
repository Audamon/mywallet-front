import styled from "styled-components";

const WalletPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
    height: 100vh;
    padding: 0 25px 0 25px ;
`
const Top = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 100%;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;

`
const TransactionsHistory = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #E5E5E5;
    border-radius: 4px;
    margin: 3vh 0 3vh 0;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px 10px 10px 10px;
`
const Bottom = styled.footer`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a{
        width: 48%;
        text-decoration: none;
    button{
        padding: 10px 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        border: none;
        background-color: #A328D6;
        color: #ffffff;
        font-size: 25px;
        border-radius: 4px;
        div{
            display: flex;
            text-align: left;
            width: 100%;
            font-size: 20px;
        }
    }
}
`
const LogOutButton = styled.button`
    background-color: #8C11BE;
    border: none;
    color: #ffffff;
    font-size:26px ;
`
const Date = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: #c6c6c6;
    padding-right: 10px;
`
const Description = styled.div`
    font-family: 'Raleway', sans-serif;
    color: #000000;
    font-size: 16px;
`
const Value = styled.div`
    color: ${props => props.color};
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
`
const TextLeft = styled.div`
    display:flex;
    justify-content: space-between;

`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const BalanceBar = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    width: 93%;
    font-weight: 700;
`
const Balance = styled.div`
        font-weight: 400;
        color: #03AC00;
`

export { Bottom, WalletPage, Top, TransactionsHistory, LogOutButton, Value, Date, Description, TextLeft, Row, BalanceBar, Balance }
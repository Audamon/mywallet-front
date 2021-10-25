import axios from 'axios'

function storeUser(user) {
    const serialUser = JSON.stringify(user);
    localStorage.setItem("user", serialUser);
};

function getStoredUser() {
    let serialUser = localStorage.getItem("user");
    const user = JSON.parse(serialUser);
    return user;
};

function signUp(body, setDisabled){
    const promise = axios.post("http://localhost:4000/signup", body);
    promise.catch(err => {
        setDisabled(false);
        if (err.response.status === 409) {
            alert("Email já cadsatrado!")
        };
        if (err.response.status === 400) {
            alert("Dados inválidos!")
        };
    })
    return promise;
};

function login(body, setDisabled) {
    const promise = axios.post('http://localhost:4000/signin', body);
    promise.catch(err => {
        setDisabled(false)
        if (err.response.status === 401) {

            alert('Dados inseridos são invalídos!');
        }
    })
    
    return promise;
};

function logout(body){
     axios.post("http://localhost:4000/signout", body);
    };

function getTransactions(config){
    const promise = axios.get('http://localhost:4000/wallet', config);
    promise.catch(err=>{
        if (err.response.status === 401) {

            alert('Dados inseridos são invalídos!');
        }
    });
    return promise;
}

function sendTransactionIn(config, body){
    axios.post('http://localhost:4000/transactions/in', body, config);
}
function sendTransactionOut(config, body){
    axios.post('http://localhost:4000/transactions/out', body, config);
}

export {storeUser, getStoredUser, signUp, login, logout, getTransactions, sendTransactionIn,sendTransactionOut }
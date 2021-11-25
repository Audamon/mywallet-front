import axios from 'axios';
import { api } from '../UrlApi.js';

function storeUser(user) {
  const serialUser = JSON.stringify(user);
  localStorage.setItem('user', serialUser);
}

function getStoredUser() {
  const serialUser = localStorage.getItem('user');
  const user = JSON.parse(serialUser);
  return user;
}

function signUp(body, setDisabled) {
  const route = 'signup';
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    setDisabled(false);
    if (err.response.statusCode === 409) {
      alert('Email já cadsatrado!');
    }
  });
  return promise;
}

function login(body, setDisabled) {
  const route = 'signin';
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    setDisabled(false);
    if (err.response.status === 401) {
      alert('Dados inseridos são invalídos!');
    }
  });

  return promise;
}

function logout(body) {
  const route = 'signout';
  axios.post(api + route, body);
}

function getTransactions(config) {
  const route = 'wallet';
  const promise = axios.get(api + route, config);
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Dados inseridos são invalídos!');
    }
  });
  return promise;
}

function sendTransactionIn(config, body) {
  const route = 'transactions/in';
  axios.post(api + route, body, config);
}
function sendTransactionOut(config, body) {
  const route = 'transactions/out';
  axios.post(api + route, body, config);
}

export {
  storeUser,
  getStoredUser,
  signUp,
  login,
  logout,
  getTransactions,
  sendTransactionIn,
  sendTransactionOut,
};

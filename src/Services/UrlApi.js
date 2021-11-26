const api = process.env.NODE_ENV === 'production' ? 'https://backendmywallet.herokuapp.com/' : 'http://localhost:5000/';
export {
  // eslint-disable-next-line import/prefer-default-export
  api,
};

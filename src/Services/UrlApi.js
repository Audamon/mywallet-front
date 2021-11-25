const api = process.env.NODE_ENV === 'production' ? 'https://magnusandhurs-back.herokuapp.com/' : 'http://localhost:5000/';
export {
  // eslint-disable-next-line import/prefer-default-export
  api,
};

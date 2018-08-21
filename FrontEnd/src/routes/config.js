const ROOT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://jobseekr-forked.herokuapp.com/api'
    : 'http://localhost:5000/api';

export default ROOT_URL;

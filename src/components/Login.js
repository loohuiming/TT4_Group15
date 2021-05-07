import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [userName, setUsername] = React.useState();
  const [userPass, setPassword] = React.useState();

  const history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(userName);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(userPass);
  };

  const submitLogin = (e) => {
    e.preventDefault();

    axios
      .post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', JSON.stringify({ userName, userPass }), {
        headers: {
          'x-api-key': 'Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        sessionStorage.setItem('isLoggedIn', true);
        let expiry = new Date();
        expiry.setSeconds(expiry.getSeconds() + 60);
        sessionStorage.setItem('expiry', expiry);
        sessionStorage.setItem('custID', res.data['custID']);
        sessionStorage.setItem('accountKey', res.data['accountKey']);
        history.replace('/');
        console.log('success');
        history.push('/Balance');
      })
      .catch((error) => {
        alert('You have entered the wrong email or username.');
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='userName'>Username</label>
          <input id='userName' type='text' className='form-control' onChange={handleUsername} />
        </div>
        <div className='form-group'>
          <label htmlFor='userPass'>Password</label>
          <input id='userPass' type='password' className='form-control' onChange={handlePassword} />
        </div>
        <button className='btn btn-primary' onClick={(e) => submitLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

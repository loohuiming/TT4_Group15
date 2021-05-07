import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // };

  // function handleSubmit(event) {
  //   event.preventDefault();
  // };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='text' className='form-control' />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

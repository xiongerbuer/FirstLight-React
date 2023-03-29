import React, { Component } from 'react';
import './LoginRegister.css';
import {useRequest} from 'ahooks';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      errors: {},
    };
  }

  render() {
    const { showLogin } = this.state;
    return (
      <div className="LoginRegister">
        <div className="LoginRegister-container">
          <div className="LoginRegister-tabs">
            <div
              className={`LoginRegister-tab ${showLogin ? 'active' : ''}`}
              onClick={() => this.setState({ showLogin: true })}
            >
              Login
            </div>
            <div
              className={`LoginRegister-tab ${showLogin ? '' : 'active'}`}
              onClick={() => this.setState({ showLogin: false })}
            >
              Register
            </div>
          </div>
          {showLogin ? (
            <LoginForm
              username={this.state.username}
              password={this.state.password}
              errors={this.state.errors}
              onChange={this.handleChange}
              onSubmit={this.handleLoginSubmit}
            />
          ) : (
            <RegisterForm
              username={this.state.username}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
              email={this.state.email}
              errors={this.state.errors}
              onChange={this.handleChange}
              onSubmit={this.handleRegisterSubmit}
            />
          )}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    // TODO: Perform login action
  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    // TODO: Perform register action
  };
}

class LoginForm extends Component {
  render() {
    const { username, password, errors } = this.props;
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.props.onChange}
            className={errors.username ? 'form-control is-invalid' : 'form-control'}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.props.onChange}
            className={errors.password ? 'form-control is-invalid' : 'form-control'}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
       </button>
  </form>
);
}
}



class RegisterForm extends Component {
render() {
const { username, password, confirmPassword, email, errors } = this.props;
return (
<form onSubmit={this.props.onSubmit}>
<div className="form-group">
<label htmlFor="username">Username:</label>
<input
type="text"
id="username"
name="username"
value={username}
onChange={this.props.onChange}
className={errors.username ? 'form-control is-invalid' : 'form-control'}
/>
{errors.username && (
<div className="invalid-feedback">{errors.username}</div>
)}
</div>
<div className="form-group">
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
name="password"
value={password}
onChange={this.props.onChange}
className={errors.password ? 'form-control is-invalid' : 'form-control'}
/>
{errors.password && (
<div className="invalid-feedback">{errors.password}</div>
)}
</div>
<div className="form-group">
<label htmlFor="confirmPassword">Confirm Password:</label>
<input
type="password"
id="confirmPassword"
name="confirmPassword"
value={confirmPassword}
onChange={this.props.onChange}
className={
errors.confirmPassword ? 'form-control is-invalid' : 'form-control'
}
/>
{errors.confirmPassword && (
<div className="invalid-feedback">{errors.confirmPassword}</div>
)}
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
name="email"
value={email}
onChange={this.props.onChange}
className={errors.email ? 'form-control is-invalid' : 'form-control'}
/>
{errors.email && <div className="invalid-feedback">{errors.email}</div>}
</div>
<button type="submit" className="btn btn-primary">
Register
</button>
</form>
);
}
}

export default LoginRegister;

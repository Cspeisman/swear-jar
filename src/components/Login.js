import React from 'react';
import {requestLogin} from '../redux/commands/SwearJarCommands';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  onChange(event) {
    if (event.currentTarget.name === 'password'){
      this.setState({password: event.currentTarget.value});
    } else {
      this.setState({username: event.currentTarget.value});
    }
  }

  login(e) {
    e.preventDefault()
    requestLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <form onSubmit={::this.login}>
          <input type="text" name="username" value={this.state.username} onChange={::this.onChange}/>
          <input type="password" name="password" value={this.state.password} onChange={::this.onChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

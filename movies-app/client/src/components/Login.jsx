import React, {Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render(){
    return (
      <div>
        <form >
          <input name="username" type='text' value={this.state.username} onChange={this.handleInputChange} placeholder="Enter Usersname" />
          <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter password" />
          <input type="submit" value="Login" onSubmit={(e)=>this.props.handleLoginSubmit(e, this.state.username, this.state.password)}/>
        </form>
      </div>
    )
  }
}

export default Login;

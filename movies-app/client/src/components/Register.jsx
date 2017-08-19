import React, {Component} from 'react';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
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
        <input type="username" name="username" value={this.state.username} placeholder="Enter Username" onChange={this.handleInputChange} />
        <input type="password" name="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleInputChange} />
        <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleInputChange} />
        <input type="submit" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.username, this.state.password, this.state.email)}/>
      </form>
    </div>
    )
  }
}

export default Register;

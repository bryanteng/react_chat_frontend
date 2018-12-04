import React, { Component, Fragment } from 'react';

export default class Login extends Component{

  state={
    username:"",
    password:""
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch('http://localhost:3000/users')
  }

  handleChange = (event) =>{
    this.setState({ [event.target.id]: event.target.value })
  }


  render(){
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
          <label>Password: </label>
          <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </Fragment>
    )
  }
}

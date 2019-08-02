import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { setUser } from '../actions/login'

class Login extends Component{

  state={
    username:"",
    password:""
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({username: this.state.username})
    }).then(res => res.json())
      .then(data => this.props.setUser(data))
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

export default connect(null, { setUser })(Login)

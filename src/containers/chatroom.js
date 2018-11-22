import React, { Component, Fragment } from 'react';

class Chatroom extends Component{

  state={
    context: "",
    messages: []
  }

  handleOnChange = (event) =>{
    this.setState({[event.target.id]: event.target.value})
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
    this.setState({messages: [...this.state.messages, this.state.context], context: ""})
  }

  render(){
    return(
      <Fragment>
      <div>
      {this.state.messages ? this.state.messages.map(message =>
        <div>{message}</div>
      ) : null}
      </div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" id="context" onChange={this.handleOnChange} value={this.state.context}/>
          <input type="submit" />
        </form>
      </Fragment>
    )
  }
}

export default Chatroom

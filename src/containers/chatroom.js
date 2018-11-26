import React, { Component, Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import Cable from '../components/Cable';

class Chatroom extends Component{

  state={
    context: "",
    chatroom_id: 1,
    messages: []
  }

  handleOnChange = (event) =>{
    this.setState({[event.target.id]: event.target.value})
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
    fetch(`${API_ROOT}/messages`, {
    method: "POST",
    headers:{
        "Content-type": "application/json"
    },
      body: JSON.stringify({context: this.state.context, user_id: 2, classroom_id: this.state.chatroom_id})
    }
  )
    this.setState({messages: [...this.state.messages, this.state.context], context: ""})
  }

  componentDidMount(){
    fetch(`${API_ROOT}/messages`)
    .then(res => res.json())
    .then(messages => {
      this.setState({messages: messages.map(message=> message.context) })
      }
    )
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

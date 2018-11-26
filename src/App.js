import React, { Component } from 'react';
import Chatroom from './containers/chatroom'
import ChatroomsList from './components/chatroomsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatroom />
        <ChatroomsList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import Chatroom from './containers/chatroom'
import ChatroomsList from './components/chatroomsList'
import CamChat from './components/camChat'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Chatroom /> */}
        <Login />
        <CamChat />
        <ChatroomsList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Chatroom from './containers/chatroom'
import { ActionCable } from 'react-actioncable-provider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatroom />
		<ActionCable
			channel={{ channel: 'ClassroomsChannel', classroom_id: 1 }}
			onReceived={console.log}
		/>
      </div>
    );
  }
}

export default App;

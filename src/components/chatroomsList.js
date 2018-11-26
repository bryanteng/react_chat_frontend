import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewClassroomForm from './newClassroomForm';
import MessagesArea from './messagesArea';
import Cable from './Cable';

class ClassroomsList extends React.Component {
  state = {
    classrooms: [],
    activeClassroom: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/classrooms`)
      .then(res => res.json())
      .then(classrooms => this.setState({ classrooms }));
  };

  handleClick = id => {
    this.setState({ activeClassroom: id });
  };

  handleReceivedClassroom = response => {
    const { classroom } = response;
    this.setState({
      classrooms: [...this.state.classrooms, classroom]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const classrooms = [...this.state.classrooms];
    const classroom = classrooms.find(
      classroom => classroom.id === message.classroom_id
    );
    classroom.messages = [...classroom.messages, message];
    this.setState({ classrooms });
  };

  render = () => {
    const { classrooms, activeClassroom } = this.state;
    return (
      <div className="classroomsList">
        <ActionCable
          channel={{ channel: 'ClassroomsChannel' }}
          onReceived={this.handleReceivedClassroom}
        />
        {this.state.classrooms.length ? (
          <Cable
            classrooms={classrooms}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Classrooms</h2>
        <ul>{mapClassrooms(classrooms, this.handleClick)}</ul>
        <NewClassroomForm />
        {activeClassroom ? (
          <MessagesArea
            classroom={findActiveClassroom(
              classrooms,
              activeClassroom
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default ClassroomsList;

const findActiveClassroom = (classrooms, activeClassroom) => {
  return classrooms.find(
    classroom => classroom.id === activeClassroom
  );
};

const mapClassrooms = (classrooms, handleClick) => {
  return classrooms.map(classroom => {
    return (
      <li key={classroom.id} onClick={() => handleClick(classroom.id)}>
        {classroom.name}
      </li>
    );
  });
};

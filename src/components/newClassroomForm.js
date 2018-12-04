import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewClassroomForm extends React.Component {
  state = {
    name: '',
    subject: ''
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/classrooms`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ name: '', subject: '' });
  };

  render = () => {
    return (
      <div className="newClassroomForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Classroom:</label>
          <br />
          <label>Class Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          <label>Class Subject:</label>
          <input type="text" id="subject" value={this.state.subject} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewClassroomForm;

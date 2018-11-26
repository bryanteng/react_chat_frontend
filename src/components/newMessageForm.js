import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class newMessageForm extends React.Component {
  state = {
    context: '',
    user_id: 2,
    classroom_id: this.props.classroom_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ classroom_id: nextProps.classroom_id });
  };

  handleChange = e => {
    this.setState({ context: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ context: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.context}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default newMessageForm;

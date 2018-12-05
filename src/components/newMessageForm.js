import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { connect } from 'react-redux'

class newMessageForm extends React.Component {
  state = {
    context: '',
    classroom_id: this.props.classroom_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ classroom_id: nextProps.classroom_id });
  };

  handleChange = (event) => {
    this.setState({ context: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({...this.props,...this.state})
    });
    this.setState({ context: '' });
  };

  render(){
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

const mapStateToProps = (state) =>{
  return{
    user_id: state.login.user_id
  }
}

export default connect(mapStateToProps, null)(newMessageForm)

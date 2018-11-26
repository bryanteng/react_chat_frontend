import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ classrooms, handleReceivedMessage }) => {
  return (
    <Fragment>
      {classrooms.map(classroom => {
        return (
          <ActionCable
            key={classroom.id}
            channel={{ channel: 'MessagesChannel', classroom_id: classroom.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;

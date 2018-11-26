import React from 'react';
import NewMessageForm from './newMessageForm';

const MessagesArea = ({
  classroom: { id, name, messages },
}) => {
  return (
    <div className="messagesArea">
      <h2>{name}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm classroom_id={id} />
    </div>
  );
};

export default MessagesArea;

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.user.username}: {message.context}</li>;
  });
};

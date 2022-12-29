import React from 'react';

function Comment({ email, name }) {
  return (
    <li>
      <div>{email}</div>
      <div>{name}</div>
    </li>
  );
}

export default Comment;

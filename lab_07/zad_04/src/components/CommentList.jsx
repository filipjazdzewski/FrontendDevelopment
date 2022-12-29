import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const commentsList = comments.map((comm) => (
    <Comment key={comm.id} email={comm.email} name={comm.name} />
  ));

  return (
    <div className='container'>
      <ul>{commentsList.reverse()}</ul>
    </div>
  );
}

export default CommentList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => setComments(res.data));
  }, []);

  function postComment(data) {
    axios
      .post('https://jsonplaceholder.typicode.com/comments', {
        name: data.name,
        email: data.email,
        body: data.body,
      })
      .then((res) => setComments((prev) => [...prev, res.data]));
  }

  return (
    <div>
      <CommentForm handleSubmitComment={(data) => postComment(data)} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;

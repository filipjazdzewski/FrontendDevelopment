import { useState } from 'react';
import FormToDoItem from './form/FormToDoItem';
import FormToDoDate from './form/FormToDoDate';
import FormToDoMessages from './form/FormToDoMessages';

function ToDoForm({ handleAdd }) {
  const newDate = new Date();
  const todayDate = newDate.toISOString().split('T')[0];

  const [toDoContent, setToDoContent] = useState('');
  const [toDoDate, setToDoDate] = useState('');
  const [messages, setMessages] = useState('');

  const handleContentChange = (event) => {
    setToDoContent(event.target.value);
  };

  const handleDateChange = (event) => {
    setToDoDate(event.target.value.toString());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages('');

    if (toDoDate <= todayDate || toDoContent.trim() === '') {
      if (toDoContent.trim() === '') {
        setMessages((current) => current + 'Empty content!\n');
      }
      if (toDoDate <= todayDate) {
        setMessages((current) => current + 'Invalid date!\n');
      }
    } else {
      const newToDo = {
        content: toDoContent,
        date: toDoDate,
      };
      handleAdd(newToDo);
      setMessages('');
      setToDoContent('');
      setToDoDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormToDoItem
        handleContentChange={handleContentChange}
        toDoContent={toDoContent}
      />
      <button className='form-submit' type='submit'>
        OK
      </button>
      <FormToDoDate handleDateChange={handleDateChange} toDoDate={toDoDate} />
      <FormToDoMessages messages={messages} />
    </form>
  );
}

export default ToDoForm;

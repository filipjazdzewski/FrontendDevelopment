function FormToDoItem({ handleContentChange, toDoContent }) {
  return (
    <input
      className='form-content'
      type='text'
      placeholder='Write a ToDo'
      onChange={handleContentChange}
      value={toDoContent}
      required
    />
  );
}

export default FormToDoItem;

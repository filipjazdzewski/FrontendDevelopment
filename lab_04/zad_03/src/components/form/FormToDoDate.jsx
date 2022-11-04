function FormToDoDate({ handleDateChange, toDoDate }) {
  return (
    <input
      className='form-date'
      type='date'
      onChange={handleDateChange}
      value={toDoDate}
      required
    />
  );
}

export default FormToDoDate;

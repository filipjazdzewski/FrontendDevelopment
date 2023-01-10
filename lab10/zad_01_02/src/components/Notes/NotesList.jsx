import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NotesItem';
import { delete_note } from '../../features/NotesSlice';

export default function NotesList() {
  const notes = useSelector((state) => state.notes.notes);

  const dispatch = useDispatch();

  function del(id) {
    dispatch(delete_note(id));
  }

  const noteElems = notes.map((x) => (
    <NoteItem key={x.id} id={x.id} content={x.content} del={() => del(x.id)} />
  ));

  return (
    <div>
      <h1>Notes:</h1>
      {noteElems.reverse()}
    </div>
  );
}

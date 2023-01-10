import { useSelector, useDispatch } from 'react-redux';
import ToDoItem from './ToDoItem';
import { delete_toDo, finish_toDo } from '../../features/ToDoSlice';

export default function ToDoList() {
  const toDos = useSelector((state) => state.toDo.toDos);

  const dispatch = useDispatch();

  function check(id) {
    dispatch(finish_toDo(id));
  }

  function del(id) {
    dispatch(delete_toDo(id));
  }

  const toDosElems = toDos.map((x) => (
    <ToDoItem
      key={x.id}
      id={x.id}
      title={x.title}
      del={() => del(x.id)}
      check={() => check(x.id)}
      done={x.done}
      date={new Date(x.date).toLocaleDateString()}
    />
  ));

  return (
    <div>
      <h1>TODO List:</h1>
      {toDosElems.reverse()}
    </div>
  );
}

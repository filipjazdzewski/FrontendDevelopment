import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import ToDoDetails from './pages/ToDoDetails';
import Notes from './pages/Notes';
import NotesDetails from './pages/NotesDetails';

export default function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<ToDo />} />
            <Route path='/todo/:id' element={<ToDoDetails />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/:id' element={<NotesDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

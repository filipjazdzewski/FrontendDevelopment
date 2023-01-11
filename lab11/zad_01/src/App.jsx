import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import AddMovie from './pages/AddMovie';
import MovieInfo from './pages/MovieInfo';
import Directors from './pages/Directors';
import AddDirector from './pages/AddDirector';
import DirectorInfo from './pages/DirectorInfo';
import EditDirector from './pages/EditDirector';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/add' element={<AddMovie />} />
          <Route path='/movies/:id' element={<MovieInfo />} />
          <Route path='/directors' element={<Directors />} />
          <Route path='/directors/add' element={<AddDirector />} />
          <Route path='/directors/:id' element={<DirectorInfo />} />
          <Route path='/directors/:id/edit' element={<EditDirector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Home from './components/Home';
import Photo from './components/Photo';
import Details from './components/Details';
import Page404 from './components/Page404';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen bg-gray-700 text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':id' element={<Photo />} />
        <Route path=':id/details' element={<Details />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

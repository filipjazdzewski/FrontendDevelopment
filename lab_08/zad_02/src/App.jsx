import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Add, Sub, Mul, Div, Page404 } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add' element={<Add />} />
        <Route path='sub' element={<Sub />} />
        <Route path='mul' element={<Mul />} />
        <Route path='div' element={<Div />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

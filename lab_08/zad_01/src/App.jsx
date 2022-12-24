import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Services, Contact, Us, Pl, De, ErrorPage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />}>
          <Route path='us' element={<Us />} />
          <Route path='pl' element={<Pl />} />
          <Route path='de' element={<De />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import UserInfo from './pages/UserInfo';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/:id' element={<UserInfo />} />
          <Route path='/users/:id/edit' element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

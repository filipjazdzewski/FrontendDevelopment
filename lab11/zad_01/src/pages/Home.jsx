import React from 'react';
import Dashboard from '../components/Dashboard';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Movies & Directors DataBase</h1>
        <p>Three Latest Movies:</p>
      </section>

      <Dashboard />
    </>
  );
}

export default Home;

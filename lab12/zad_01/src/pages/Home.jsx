import React from 'react';
import SearchUser from '../components/SearchUser';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Users DataBase</h1>
        <p>You can search users below</p>
      </section>

      <SearchUser />
    </>
  );
}

export default Home;

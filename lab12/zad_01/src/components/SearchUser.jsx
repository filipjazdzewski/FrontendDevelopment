import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSistrix } from 'react-icons/fa';
import UsersList from './UsersList';

function SearchUser() {
  const users = useSelector((state) => state.users.users);
  const [sortBy, setSortBy] = useState('');
  const [displayedUsers, setDisplayedUsers] = useState(users);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  function handleSortUsers(e) {
    setSortBy(e.target.value);
    if (e.target.value === 'loginDescending') {
      setDisplayedUsers((prev) =>
        prev.slice().sort((a, b) => {
          const loginA = a.login.toUpperCase();
          const loginB = b.login.toUpperCase();
          if (loginA < loginB) {
            return 1;
          }
          if (loginA > loginB) {
            return -1;
          }
          return 0;
        })
      );
    } else if (e.target.value === 'loginAscending') {
      setDisplayedUsers((prev) =>
        prev.slice().sort((a, b) => {
          const loginA = a.login.toUpperCase();
          const loginB = b.login.toUpperCase();
          if (loginA < loginB) {
            return -1;
          }
          if (loginA > loginB) {
            return 1;
          }
          return 0;
        })
      );
    } else if (e.target.value === 'emailDescending') {
      setDisplayedUsers((prev) =>
        prev.slice().sort((a, b) => {
          const emailA = a.email.toUpperCase();
          const emailB = b.email.toUpperCase();
          if (emailA < emailB) {
            return 1;
          }
          if (emailA > emailB) {
            return -1;
          }
          return 0;
        })
      );
    } else if (e.target.value === 'emailAscending') {
      setDisplayedUsers((prev) =>
        prev.slice().sort((a, b) => {
          const emailA = a.email.toUpperCase();
          const emailB = b.email.toUpperCase();
          if (emailA < emailB) {
            return -1;
          }
          if (emailA > emailB) {
            return 1;
          }
          return 0;
        })
      );
    }
  }

  function handleFilterUsers(e) {
    e.preventDefault();
    setDisplayedUsers(
      users.filter(
        (x) =>
          x.login.toUpperCase().includes(search.toUpperCase()) ||
          x.email.toUpperCase().includes(search.toUpperCase())
      )
    );
    setSortBy('');
    setSearch('');
    setMsg(`Results for: "${search}"`);
  }

  function handleClear() {
    setDisplayedUsers(users);
    setSearch('');
    setMsg('');
    setSortBy('');
  }

  return (
    <>
      <section className='form'>
        <form role='Search' onSubmit={handleFilterUsers}>
          <div className='form-group'>
            <input
              type='search'
              id='search'
              login='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search users'
              required
            />
          </div>
          <div className='form-group'>
            <select value={sortBy} onChange={handleSortUsers}>
              <option value=''>Sort by</option>
              <option value='loginAscending'>Login ascending</option>
              <option value='loginDescending'>Login descending</option>
              <option value='emailAscending'>Email ascending</option>
              <option value='emailDescending'>Email descending</option>
            </select>
          </div>
          <div className='form-group-buttons'>
            <button className='btn btn-block'>
              <FaSistrix /> Search
            </button>
            <button className='btn btn-block' onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </section>

      {msg && <h1>{msg}</h1>}

      <UsersList users={displayedUsers} del={false} />
    </>
  );
}

export default SearchUser;

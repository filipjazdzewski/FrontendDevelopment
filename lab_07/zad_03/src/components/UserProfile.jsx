import React from 'react';

function UserProfile({ registeredUser, handleDelete }) {
  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{registeredUser.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{registeredUser.email}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>{registeredUser.password}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{registeredUser.gender}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{registeredUser.nationality}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDelete}>Delete account</button>
    </div>
  );
}

export default UserProfile;

import React, { useState } from 'react';
import UserService from '../services/UserService';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { id };
    UserService.deleteUser(user).then(response => {
      console.log('User deleted:', response.data);
    });
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUser;

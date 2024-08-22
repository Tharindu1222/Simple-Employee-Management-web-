import React, { useState } from 'react';
import UserService from '../services/UserService';

const AddUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { id, name };
    UserService.addUser(user).then(response => {
      console.log('User added:', response.data);
      setId('');
      setName('');
    }).catch(error => {
      console.error('There was an error adding the user!', error);
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;

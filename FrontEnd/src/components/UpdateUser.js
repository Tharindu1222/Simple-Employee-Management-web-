import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    UserService.getUsers().then(response => {
      const user = response.data.find(user => user.id === parseInt(id));
      if (user) {
        setName(user.name);
      }
    });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { id, name };
    UserService.updateUser(user).then(response => {
      console.log('User updated:', response.data);
    }).catch(error => {
      console.error('There was an error updating the user!', error);
    });
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;

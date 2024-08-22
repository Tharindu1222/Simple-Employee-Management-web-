import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    UserService.getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Error fetching users');
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    UserService.deleteUser({ id })
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
        console.log('User deleted:', response.data);
      })
      .catch(error => {
        setError('Error deleting user');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/update/${user.id}`} className="btn btn-primary btn-sm">Update</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

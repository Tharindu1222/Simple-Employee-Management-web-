import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/users">User Management System</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/users">User List</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/add">Add User</Link></li>
            </ul>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/update/:id" element={<UpdateUser />} />
            <Route path="/delete" element={<DeleteUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

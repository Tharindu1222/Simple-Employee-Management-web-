import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService {
  getUsers() {
    return axios.get(`${USER_API_BASE_URL}/getusers`);
  }

  addUser(user) {
    return axios.post(`${USER_API_BASE_URL}/adduser`, user);
  }

  updateUser(user) {
    return axios.put(`${USER_API_BASE_URL}/updateuser`, user);
  }

  deleteUser(user) {
    return axios.delete(`${USER_API_BASE_URL}/deleteuser`, { data: user });
  }
}

const userServiceInstance = new UserService();
export default userServiceInstance;

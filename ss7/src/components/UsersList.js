import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_USERS } from "../redux/Types";


function UserList() {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();


  const removeUser = (id) => {
    dispatch({
      type: DELETE_USERS,
      payload: id
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td><button type="button" onClick={() => removeUser(`${user.id}`)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
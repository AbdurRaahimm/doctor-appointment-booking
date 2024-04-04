import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/userSlice';

export default function UserList() {
  const user = useSelector(state => state.user);
  console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <section className='py-2'>
      <h3>User List</h3>

      <div className='table-responsive'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.loading ? <tr><td>
                <div style={{ color: "#FD4169" }} className="spinner-border text-primary  " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </td></tr> :
                user.error ? <tr><td>{user.error}</td></tr> :
                  user.user.map(user => (
                    <tr key={user._id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                      </td>
                    </tr>
                  ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

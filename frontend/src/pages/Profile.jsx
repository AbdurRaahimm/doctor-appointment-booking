import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || [];
  const userById = useSelector(state => state.userById.userById);
  // console.log(user)
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <img src={user.image.url} className="rounded-circle" alt="Profile" width="100" />
                  <h4 className="card-title mt-10">{user.username}</h4>
                  <p className="card-text">Email: {user.email || userById.email}</p>
                  <p className="card-text">Phone: {user.phone || userById.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

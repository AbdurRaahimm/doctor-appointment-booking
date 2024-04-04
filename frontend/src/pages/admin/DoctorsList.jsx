import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../redux/doctorSlice';
import { toast } from 'react-toastify';

export default function DoctorList() {
  const user = JSON.parse(localStorage.getItem('user')) || [];
  const doctor = useSelector(state => state.doctor);
  // console.log(doctor._id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const handleApprovedDoctor = async (e) => {
    const doctorId = e.target.parentElement.parentElement.cells[0].innerText;
    console.log(doctorId);
    const response = await fetch(`http://localhost:3000/api/admin/approve-doctor/${doctorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.Token}`
      },
    });
    if (!response.ok) {
      toast.error('Server error');
    } else {
      toast.success('Doctor approved successfully');
      dispatch(fetchDoctors());
    }
  };

  const handleBlockedDoctor = async (e) => {
    const doctorId = e.target.parentElement.parentElement.cells[0].innerText;
    console.log(doctorId);
    const response = await fetch(`http://localhost:3000/api/admin/block-doctor/${doctorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.Token}`
      },
    });
    if (!response.ok) {
      toast.error('Server error');
    } else {
      toast.success('Doctor blocked successfully');
      dispatch(fetchDoctors());
    }
  };

  const handleUnblockedDoctor = async (e) => {
    const doctorId = e.target.parentElement.parentElement.cells[0].innerText;
    console.log(doctorId);
    const response = await fetch(`http://localhost:3000/api/admin/unblock-doctor/${doctorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.Token}`
      },
    });
    if (!response.ok) {
      toast.error('Server error');
    } else {
      toast.success('Doctor unblocked successfully');
      dispatch(fetchDoctors());
    }
  };
  return (
    <section className='py-2'>
      <h3>Doctor List</h3>

      <div className='table-responsive'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Specialization</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              doctor.loading ? <tr><td>
                <div style={{ color: "#FD4169" }} className="spinner-border text-primary  " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </td></tr> :
                doctor.error ? <tr><td>{doctor.error}</td></tr> :
                  doctor.doctors.map(doctor => (
                    <tr key={doctor._id}>
                      <td>{doctor._id}</td>
                      <td>{doctor.name}</td>
                      <td>{doctor.email}</td>
                      <td>{doctor.phone}</td>
                      <td>{doctor.address}</td>
                      <td>{doctor.speciality}</td>
                      <td>{doctor.status}</td>
                      <td>
                        {doctor.status === 'pending' && <button onClick={handleApprovedDoctor} className='btn btn-sm btn-success'>Approve</button>}
                        {doctor.status === 'approved' && <button onClick={handleBlockedDoctor} className='btn btn-sm btn-danger'>Block</button>}
                        {doctor.status === 'blocked' && <button onClick={handleUnblockedDoctor} className='btn btn-sm btn-danger'>Unblock</button>}

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

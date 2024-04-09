import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateTimeSlots } from '../utilis/generateTimeSlots'
import { getCookie } from '../utilis/getCookie';
import { toast } from 'react-toastify';
import { fetchUserById } from '../redux/userByIdSlice';


export default function TimeSlots({ doctor, selectedDate }) {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const userById = useSelector( state => state.userById.userById)
    // console.log(userById)
    const [btnValue, setBtnValue] = React.useState('')
    // console.log(doctor, selectedDate)
    // const timeSlots = useSelector(state => state.timeSlots.timeSlots)
    // console.log(timeSlots)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(doctor)
        dispatch(fetchUserById(user._id))
    }, [])
    const dataPass = (e) => {
        e.preventDefault();
        setBtnValue(e.target.getAttribute('data-value'))
    }

    const bookAppontment = async (e) => {
        e.preventDefault();
        const token = getCookie('token');
        if (!token) {
            toast.error('Please login first')
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/user/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId: userById._id,
                    doctorId: doctor._id,
                    userInfo: userById,
                    doctorInfo: doctor,
                    date: selectedDate,
                    time: btnValue,
                }) 
            });
            const data = await res.json();
            if (res.ok) {
                toast.success(data.message)
                // disable the button after booking an appointment 
                document.querySelector('.btn-book').setAttribute('disabled', true)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <label htmlFor="timeSlot" className="form-label">Time Slot :</label>
            {/* open modal */}
            <div className="modal fade" id="openModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase" id="exampleModalLabel">Confirm Appointment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to book an appointment width {doctor.name} on {selectedDate} at {btnValue}  ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            <button type="submit" onClick={bookAppontment} className="btn text-white text-capitalize  " style={{ backgroundImage: 'linear-gradient(to right, #fc6076, #ff9a44)' }}>Book now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2 flex-wrap ">
                {
                    generateTimeSlots(doctor.timeFrom, doctor.timeTo, 30).map((time, index, e) => (
                        <>
                            <button
                                onClick={dataPass}
                                key={index}
                                className="btn border text-uppercase btn-book"
                                data-value={time}
                                data-bs-toggle="modal"
                                data-bs-target="#openModal"
                            >
                                {time}
                            </button>

                        </>
                    ))
                }
                {/* <button className="btn border text-uppercase  ">9.00 Am </button> */}
            </div>
        </>
    )
}

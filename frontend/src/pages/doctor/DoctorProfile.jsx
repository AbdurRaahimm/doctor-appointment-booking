import React from 'react'
import { useLocation } from 'react-router-dom'
import { convertTo12HourFormat } from '../../utilis/convertTo12HourFormat';

export default function DoctorProfile() {
    const locate = useLocation();
    console.log(locate.state)
    const doctor = locate.state;
    return (
        <section className='py-5 px-4  '>
            <div className="row">
                <div className="col-lg-8 col-md-12 mb-4">
                    <div className="docProfile bg-white shadow rounded d-flex">
                        <div className="docImg">
                            {/* <img className='p-4 rounded-5 h-100 w-100' src="https://demo.freaktemplate.com/bookappointment/public/upload/doctors/6.jpg" alt="Doctor" /> */}
                            <img width={200} className='p-4 rounded-5' src={`http://localhost:3000/${doctor.image}`} alt="Doctor" />
                        </div>
                        <div className="docDetails py-4 px-3">
                            <div className="name-box">
                                <h3 className=' fw-bolder fs-3 mb-0' style={{ color: "#fd4169" }}>
                                    {doctor.name} ({doctor.degree})
                                </h3>
                                <span>
                                    {doctor.speciality}
                                </span>
                                <p>
                                    {doctor.experience} years of experience
                                </p>
                            </div>
                            <div class="rating">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <i class="bi bi-star-half text-warning"></i>
                                (2)
                            </div>
                            <div className="desc">
                                <span>Dr. Giorgos is a Urologist in ABC City and has an experience of 10 years in this field. Dr. Giorgos practices at XYZ Hospital in ABC City.</span>
                            </div>
                            <div class="location-box d-flex justify-content-between pr-4">
                                <div className="">
                                    <i class="bi bi-geo-alt-fill" style={{ color: "#fd4169" }}></i>
                                    <span> 
                                        {doctor.address}
                                    </span>
                                </div>
                                {/* <a className='text-decoration-none text-capitalize' href="">View map</a> */}
                            </div>
                            <div class="contact-box">
                                <i class="bi bi-telephone-fill" style={{ color: "#fd4169" }}></i>
                                <span>  <a className='text-decoration-none text-black-50 ' href="tel:1234567890"> 
                                    {doctor.phone}
                                </a></span>
                            </div>
                        </div>
                    </div>

                    {/* doctor's services */}
                    <div className="services bg-white shadow rounded mt-4">
                        <div className="p-2 rounded-top" style={{ background: "#40b176" }}>
                            <nav>
                                <div className="nav " id="nav-tab" role="tablist">
                                    <button className="nav-link active text-white fw-bold border-end px-5 " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">Overview</button>
                                    <button className="nav-link text-white fw-bold border-end px-5" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Location</button>
                                    <button className="nav-link text-white fw-bold border-end px-5" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                                        type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
                                </div>
                            </nav>
                        </div>
                        {/* content */}
                        <div className="tab-content p-4" id="nav-tabContent">
                            <div className="tab-pane fade show active bg-white" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h5 className='fw-bolder'>Overview</h5>
                                <p>Dr. Giorgos is a Urologist in ABC City and has an experience of 10 years in this field. Dr. Giorgos practices at XYZ Hospital in ABC City.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <h5 className='fw-bolder'>Location</h5>
                                <p>123, XYZ Street, ABC City</p>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <h5 className='fw-bolder'>Reviews</h5>
                                <p>Dr. Giorgos is a Urologist in ABC City and has an experience of 10 years in this field. Dr. Giorgos practices at XYZ Hospital in ABC City.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 ">
                    {/* appointment book */}
                    <div className="appointmentBook bg-white shadow rounded">
                        <div className=" p-4 rounded-top " style={{ background: "#40b176" }}>
                            <h5 className='fw-bolder text-white fs-3 '>Book Appointment</h5>
                            <p className='text-white-50 '>
                            {/* Monday to Sunday: 9:00 AM to 6:00 PM */}

                            {`Available on ${convertTo12HourFormat(doctor.timeFrom)} to ${convertTo12HourFormat(doctor.timeTo)}`}
                            </p>
                        </div>
                        <div className="p-3">
                            <form action="">
                                <div className="mb-3">
                                    <label for="date" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                                <div className="mb-3">
                                    <label for="time" className="form-label">Time</label>
                                    <select className='form-select' name="" id="">
                                        <option value="9:00 AM">9:00 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    {/* timeSlot */}
                                    <label for="timeSlot" className="form-label">Time Slot</label>
                                </div>
                                <button type="submit" className="btn text-white w-100 text-capitalize  " style={{ backgroundImage: 'linear-gradient(to right, #fc6076, #ff9a44)' }}>Book now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

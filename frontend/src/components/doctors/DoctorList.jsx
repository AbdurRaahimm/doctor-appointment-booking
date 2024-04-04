import React from 'react'
import DoctorCard from './DoctorCard'
import { convertTo12HourFormat } from '../../utilis/convertTo12HourFormat'
import { formatPrice } from '../../utilis/formatPrice'

export default function DoctorList({ doctor }) {
    // console.log(doctor.image)
    return (
        <div className="col-md-4 rounded mb-3">
            <div className="rounded " style={{ boxShadow: "0 20px 30px rgba(0,24,73,.1)", borderWidth: "none !important" }}>
                {/* <img src={`http://localhost:3000/${doctor.image}`} alt="Doctor" className="card-img-top rounded-top w-75  " />  */}
                <img src={`http://localhost:3000/${doctor.image}`} alt="Doctor" className="card-img-top rounded-top w-100  " />
                <div className="card-body rounded " style={{ background: "#fff", padding: "15px 15px 15px" }}>
                    <h5 className="card-title fs-5 fw-bold  " style={{ color: "#767676" }}>{doctor.name}</h5>
                    <p className="card-text" style={{ marginBottom: "0" }}> {doctor.speciality} </p>
                    <div className="rating">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        (2)
                    </div>
                    <div className="location-box ">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span> {doctor.address}</span>
                    </div>
                    <div className="hospital">
                        <i className="bi bi-hospital-fill"></i>
                        <span> {doctor.hospital}</span>
                    </div>
                    <div className="price">
                        <i className="bi bi-cash"></i>
                        <span> {formatPrice(doctor.fee)}</span>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <span className="fw-bold mt-2" style={{ color: "#FD4169" }}>
                            {/* 9:00 AM to 6:00 PM */}
                            {`${convertTo12HourFormat(doctor.timeFrom)} to ${convertTo12HourFormat(doctor.timeTo)} `}
                        </span>
                        <a className="border rounded-4 px-2 py-1 text-decoration-none " href="#">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

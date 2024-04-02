import React from 'react'

export default function DoctorCard() {
    return (
        <div className="rounded " style={{ boxShadow: "0 20px 30px rgba(0,24,73,.1)", borderWidth: "none !important" }}>
            <img src="https://demo.freaktemplate.com/bookappointment/public/upload/doctors/1709896271.jpg" alt="Doctor" className="card-img-top rounded-top   " />
            <div className="card-body rounded " style={{ background: "#fff", padding: "15px 15px 15px" }}>
                <h5 className="card-title fs-5 fw-bold  " style={{ color: "#767676" }}>Dr. Mahajan</h5>
                <p className="card-text" style={{ marginBottom: "0" }}>Cardiologist</p>
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
                    <span> Dhaka, Bangladesh</span>
                </div>
                <div className="hospital">
                    <i className="bi bi-hospital-fill"></i>
                    <span> Apollo Hospital</span>
                </div>
                <div className="price">
                    <i className="bi bi-cash"></i>
                    <span> $500</span>
                </div>
                <div className="d-flex justify-content-between ">
                    <span className="fw-bold mt-2" style={{ color: "#FD4169" }}>9:00 AM to 6:00 PM</span>
                    <a className="border rounded-4 px-2 py-1 text-decoration-none " href="#">Book Now</a>
                </div>
            </div>
        </div>
    )
}

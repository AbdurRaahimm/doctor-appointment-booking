import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { menus } from "../../data/menus";
import { toast } from "react-toastify";
import { getCookie } from "../../utilis/getCookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NavBar() {
    const [search, setSearch] = useState("");
    const [doctor, setDoctor] = useState("");
    const approvedDoctors = useSelector(state => state.approvedDoctors.doctors);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || [];
    let token = getCookie("token");
    // console.log(user.image)


    const searchHandle = (search) => {
        setSearch(search);
        const filterDoctor = approvedDoctors.filter((doctor) => {
            return doctor.name.toLowerCase().includes(search.toLowerCase());
        });
        // console.log(filterDoctor);
        setDoctor(filterDoctor);
        if (search === "") {
            setDoctor([]);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img width={48} className=" " src="https://abdurraahimm.github.io/capstone/img/logo/logo.png" alt="logo" />
                        <span className="fw-bold text-capitalize ">Dr.</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                       

                        <ul className="navbar-nav " style={{ alignItems: "center" }}>
                            {
                                menus.map((menu, index) => (
                                    <li key={index} className="nav-item">
                                        <NavLink
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "#fd4169" : "",
                                                    borderBottom: isActive ? "2px solid #fd4169" : "",
                                                }
                                            }} className="nav-link fw-bold text-capitalize " to={menu.path}>{menu.name}
                                        </NavLink>
                                    </li>
                                ))
                            }

                            {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/finddoc">Find Doctor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/patientprofile">patient profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctorprofile">Doctor profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li> */}
                        </ul>

                        {/* if token exist then show */}
                        {/* {token ? (
                           

                        ) : (
                           
                        )} */}

                    </div>
                     {/* search bar with icon*/}
                     <form className="d-flex ms-auto w-50 ">
                            <i className="bi bi-search position-absolute  py-2 px-2 border-end"></i>
                            <input type="search"
                                onChange={(e) => searchHandle(
                                    e.target.value,
                                )}
                                className="form-control ps-5 border-start " placeholder="Search Doctor..." />
                        </form>
                </div>
            </nav>
            <div className="w-50 mx-auto bg-white shadow">
                {/* search result */}
                <div className="search-result ">
                    {
                        // no found 
                        search && doctor.length === 0 && (
                            <div className="d-flex justify-content-between border-bottom p-2">
                                <p>No Doctor Found</p>
                            </div>
                        )
                    }
                    {
                        doctor && doctor.map((doctor, index) => (
                            <div key={index} className="d-flex justify-content-between border-bottom p-2">
                                <div className="d-flex gap-2">
                                    <img src={doctor.image} alt="" width="40" height="40" className="rounded-circle" />
                                    <div>
                                        <h6>{doctor.name}</h6>
                                        <p>{doctor.speciality}</p>
                                    </div>
                                </div>
                                <Link to={`/doctor-profile/${doctor._id}`} state={doctor} className="btn btn-primary">view</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

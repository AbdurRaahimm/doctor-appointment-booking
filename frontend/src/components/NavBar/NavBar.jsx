import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { menus } from "../../data/menus";
import { toast } from "react-toastify";
import { getCookie } from "../../utilis/getCookie";


export default function NavBar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || [];
    let token = getCookie("token");
    // console.log(user.image)

    const handleLogOut = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/user/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.removeItem("user");
                // navigate("/");
                window.location.href = "/";
                // alert(data.message);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }
        catch (error) {
            console.log(error.message)
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img  width={48} className=" " src="https:abdurraahimm.github.io/capstone/img/logo/logo.png" alt="" />
                    <span className="fw-bold text-capitalize ">Dr. appointment</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{ alignItems: "center" }}>
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
                    {token ? (
                        <div className="mx-2 dropdown">
                            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={`http://localhost:3000/${user.image}`} alt="" width="32" height="32" className="rounded-circle me-4" />
                                {/* <strong>^</strong> */}
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                {/* <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li> */}
                                <Link className="dropdown-item text-capitalize" to="dashboard">
                                    <i className="bi bi-person-fill fs-5 "></i> dashboard
                                </Link>
                                <li><hr className="dropdown-divider" /></li>
                                <li >
                                    <button onClick={handleLogOut} className="dropdown-item text-capitalize">
                                        <i className="bi bi-box-arrow-right fs-5 "></i> Log out
                                    </button>
                                </li>
                            </ul>
                        </div>


                    ) : (
                        <div className="d-flex">
                            {/* <Link className="btn btn-outline-primary" to="/login">Login</Link>
                            <Link className="btn btn-danger ms-2" to="/register">Register</Link> */}
                        </div>
                    )}

                </div>
            </div>
        </nav>

    )
}

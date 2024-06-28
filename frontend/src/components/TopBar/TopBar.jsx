import { Link } from "react-router-dom";
import style from './TopBar.module.css'
import { getCookie } from "../../utilis/getCookie";



export default function TopBar() {
    let token = getCookie("token");
    const user = JSON.parse(localStorage.getItem('user')) || [];
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
        <div className={`${style.topbar} d-flex justify-content-between px-3 `}>
            <div className="topbar-left d-flex justify-content-between ">
                <div className="topbar-left-item m-2">
                    <i className="bi bi-telephone"></i>
                    <a href="tel:123-456-7890" className="text-white text-decoration-none "> 123-456-7890 </a>
                </div>
                <div className="topbar-left-item m-2">
                    <i className="bi bi-envelope"></i>
                    <span>
                        <a href="mailto:admin@gmail.com" className="text-white text-decoration-none "> admin@gmail.com </a>

                    </span>

                </div>
            </div>
            <div className="topbar-right d-flex justify-content-between  ">
                <div className="topbar-right-item m-2">

                    <a href="https://www.facebook.com/AbdurRahim1996" className=" text-white  "><i className="bi bi-facebook"></i></a>
                </div>
                <div className="topbar-right-item m-2">

                    <a href="https://x.com/AbdurRahim4G" className=" text-white  "><i className="bi bi-twitter"></i></a>
                </div>
                <div className="topbar-right-item m-2">

                    <a href="https://www.instagram.com/abdurrahim4g/" className=" text-white  "><i className="bi bi-instagram"></i></a>
                </div>
                <div className="topbar-right-item m-2">
                    <a href="https://www.linkedin.com/in/abdur-rahim4g/" className=" text-white  "><i className="bi bi-linkedin"></i></a>

                </div>
                {
                    token ? (
                        <div className="topbar-right-item m-2 z-3"> 
                             <div className="mx-2 dropdown">
                                <a href="#" className="z-3 d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user.image.url} alt="" width="32" height="32" className="rounded-circle me-4" />
                                    {/* <strong>^</strong> */}
                                </a>
                                <ul className="dropdown-menu text-small shadow z-3" aria-labelledby="dropdownUser2">
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

                        </div>
                    ) : (
                        <div className="topbar-right-item m-2">
                            <Link to="/signin" className="text-white text-decoration-none border rounded px-2 py-1">Sign In / Sign Up</Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

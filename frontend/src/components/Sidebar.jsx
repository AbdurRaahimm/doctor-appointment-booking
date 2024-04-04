import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doctorMenus } from '../data/doctorMenus';
import { adminMenus } from '../data/adminMenus';
import { userMenus } from '../data/userMenus';
import { fetchUserById } from '../redux/userByIdSlice';

export default function Sidebar() {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const userById = useSelector(state => state.userById.userById);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserById(user._id))
    }, []);
    const menus = userById.isDoctor ? doctorMenus : userById.isAdmin ? adminMenus : userMenus;
    return (
        <aside className='shadow rounded p-3 text-white min-vh-100' style={{ background: '#40b176' }}>

            <div className="d-flex flex-column flex-shrink-0 p-3 " style={{ width: '280px' }}>
                <div className="text-center">
                    <img src={`http://localhost:3000/${userById.image}`} alt="profile" className="img-fluid rounded-circle " style={{ width: "10rem", height: "10rem" }} />
                    <h5>
                        {userById.username}
                        ({
                            userById.isDoctor ? 'Doctor' : userById.isAdmin ? 'Admin' : 'User'

                        })
                    </h5>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto gap-3  ">
                    {
                        menus.map((menu, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <NavLink to={menu.path} style={
                                        ({ isActive }) => {
                                            return {
                                                color: isActive ? "#fd4169" : "",
                                                borderBottom: isActive ? "2px solid #fd4169" : "",
                                            }
                                        }

                                    }
                                        className="nav-item text-white text-decoration-none " >
                                        <i className={menu.icon}></i> {menu.name}
                                    </NavLink>
                                </li>
                            )
                        })


                    }


                </ul>
                <hr />

            </div>

        </aside>
    )
}

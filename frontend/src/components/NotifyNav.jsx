import React from 'react'

export default function NotifyNav() {
    return (
        <div className='px-4 d-flex justify-content-between gap-2 shadow rounded py-3'>
            <div className="">
                <i class="bi bi-layout-text-sidebar-reverse fs-5"></i>
            </div>
            <div className="position-relative pe-2">
                <i className="bi bi-bell-fill fs-5"></i>
                <sup className=' text-center align-content-center  text-white rounded-circle position-absolute ' style={{ backgroundImage: 'linear-gradient(to right, #fc6076, #ff9a44)', display: 'inline-block', width: "20px", height: "20px" }}>2</sup>
            </div>
        </div>
    )
}

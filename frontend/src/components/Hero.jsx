import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="slider position-relative ">
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active "
                        style={{backgroundImage: "url(https://abdurraahimm.github.io/capstone/img/hero/hero-slider-1.jpg)", backgroundSize: "cover", height: "500px"  }}>
                        <div className="w-50  d-none d-md-block " style={{padding:"100px 0px", paddingLeft: "90px"}}>
                            <h1 className="text-uppercase fw-bold " style={{color:"#002856"}}>Our Doctors Are Always In Your Side</h1>
                            <p className="text-uppercase text-black-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                voluptatum.</p>
                            <Link to="find-doctor"><button type="button" className="btn btn-lg text-white " style={{background:"#FD4169"}}>Get Appoinment</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item"
                        style={{backgroundImage: "url(https://abdurraahimm.github.io/capstone/img/hero/hero-slider-1.jpg)", backgroundSize: "cover", height: "500px"  }}>
                        <div className="w-50  d-none d-md-block " style={{padding:"100px 0px", paddingLeft: "90px"}}>
                            <h1 className="text-uppercase fw-bold " style={{color:"#002856"}}>Our Doctors Are Always In Your Side</h1>
                            <p className="text-uppercase text-black-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                voluptatum.</p>
                                <Link to="find-doctor"><button type="button" className="btn btn-lg text-white " style={{background:"#FD4169"}}>Get Appoinment</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item"
                        style={{backgroundImage: "url(https://abdurraahimm.github.io/capstone/img/hero/hero-slider-1.jpg)", backgroundSize: "cover", height: "500px"  }}>
                        <div className="w-50  d-none d-md-block " style={{padding:"100px 0px", paddingLeft: "90px"}}>
                            <h1 className="text-uppercase fw-bold " style={{color:"#002856"}}>Our Doctors Are Always In Your Side</h1>
                            <p className="text-uppercase text-black-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                voluptatum.</p>
                                <Link to="find-doctor"><button type="button" className="btn btn-lg text-white " style={{background:"#FD4169"}}>Get Appoinment</button></Link>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev position-absolute top-50  rounded-circle "
                    style={{background: "#002856", width:"40px", height: "40px", left:"20px"}} type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next position-absolute top-50  rounded-circle" type="button"
                    style={{background: "#002856", width:"40px", height: "40px", left:"20px"}} data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </section>
    )
}

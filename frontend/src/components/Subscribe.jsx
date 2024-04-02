import React from 'react'

export default function Subscribe() {
    return (
        <section className=" py-5" >
            <div className="container">
                <div className="p-5 rounded-2" style={{ background: "#323232" }}>
                    <div className="row clearfix" >
                        <div className="col-lg-6 col-md-12 rounded-1 mb-3 " style={{}}>
                            <div className="card p-4" style={{ background: "transparent", border: "1px dashed #fff" }}>
                                <h2 className=" pb-2 fw-bolder fs-2" style={{ color: "#fd4169" }}>Emergency call</h2>
                                {/* icon and number */}
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-between">
                                        <i className="bi bi-telephone-fill text-white fs-2 "></i>
                                        <div className="d-flex flex-column ms-4">
                                            <span className="text-white fw-bold">Call us now</span>
                                            <a href="tel:+1234567890" className="text-decoration-none " style={{ color: "#fd4169" }}>+1234567890</a>

                                        </div>
                                    </div>
                                    {/* <a href="#" className="btn btn-primary">Call Now</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 rounded-1 ">
                            {/* subscribe */}
                            <div className="card p-4" style={{ background: "transparent", border: "1px dashed #fff" }}>
                                <h2 className=" pb-2 fw-bolder fs-1" style={{ color: "#fd4169" }}>Sign up for Newsletter. </h2>
                                <form action="#" method="post">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                        <button className="btn text-white " style={{ background: "#fd4169" }}>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

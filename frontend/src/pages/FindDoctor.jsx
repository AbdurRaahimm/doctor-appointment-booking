import React from 'react'
import DoctorList from '../components/doctors/DoctorList'

export default function FindDoctor() {
    return (
        <div className="py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12  py-2 mb-3">
                        <aside className='shadow rounded p-3'>
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by name </p>
                                <i className="bi bi-search position-absolute  py-2 px-2 border-end"></i>
                                <input type="text" className="form-control ps-5 border-start " placeholder="Search Doctor..." />
                            </div>
                            <hr />
                            {/* location */}
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by location </p>
                                <select className='form-select' name="location" id="location">
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                </select>
                            </div>
                            <hr />

                            {/* specialist */}
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by specialist </p>
                                <select className='form-select' name="specialist" id="specialist">

                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Neurologist">Neurologist</option>
                                    <option value="Ophthalmologist">Ophthalmologist</option>
                                    <option value="Pediatrician">Pediatrician</option>
                                    <option value="Psychiatrist">Psychiatrist</option>
                                    <option value="Surgeon">Surgeon</option>
                                </select>
                            </div>
                            <hr />

                            {/* hospital */}
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by hospital </p>
                                <select className='form-select' name="hospital" id="hospital">
                                    <option disabled>Select Hospital</option>
                                    <option value="Apollo Hospital">Apollo Hospital</option>
                                    <option value="Square Hospital">Square Hospital</option>
                                    <option value="Labaid Hospital">Labaid Hospital</option>
                                    <option value="United Hospital">United Hospital</option>
                                    <option value="Ibn Sina Hospital">Ibn Sina Hospital</option>
                                    <option value="Popular Hospital">Popular Hospital</option>
                                    <option value="Samorita Hospital">Samorita Hospital</option>
                                    <option value="City Hospital">City Hospital</option>
                                </select>
                            </div>
                            <hr />

                            {/* reviews */}
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by reviews </p>
                                <select className='form-select' name="reviews" id="reviews">
                                    <option disabled>Select Reviews</option>
                                    <option value="5">5 (10 reviews)</option>
                                    <option value="4">4 (20 reviews)</option>
                                    <option value="3">3 (30 reviews)</option>
                                    <option value="2">2 (40 reviews)</option>
                                    <option value="1">1 (50 reviews)</option>
                                </select>
                            </div>
                            <hr />

                            {/* price */}
                            <div className=" position-relative ">
                                <p className='fw-bold text-capitalize ' style={{ color: "#fd4169" }}>find by price </p>
                                {/* price range */}
                                <input type="range" className="form-range" id="customRange1" />
                                {/* price range values */}
                                <div className="d-flex justify-content-between">
                                    <span>$100</span>
                                    <span>$500</span>
                                </div>
                            </div>

                        </aside>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="container-fluid">
                            {/* sorted */}
                            <div className='py-2 d-flex justify-content-end gap-2'>
                                <select className='form-select' name="sort" id="sortFilter" class="px-4 py-2 rounded focus:outline-none">
                                    <option value="default">Sort by Default</option>
                                    <option value="rating">Sort by Rating</option>
                                    <option value="new">Sort by Newness</option>
                                    <option value="low">Sort by Price: low to high</option>
                                    <option value="high">Sort by Price: high to low</option>
                                </select>
                                <select className='form-select' name="show" id="showPerItem" class="px-4 py-2 rounded focus:outline-none">
                                    <option disabled>Show Product per Item</option>
                                    <option value="3">Show 3</option>
                                    <option value="6">Show 6</option>
                                    <option value="12">Show 12</option>
                                    <option value="18">Show 18</option>
                                </select>
                            </div>
                            <div className="row">
                                <DoctorList />
                                <DoctorList />
                                <DoctorList />
                                <DoctorList />
                                <DoctorList />
                                <DoctorList />
                                <DoctorList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

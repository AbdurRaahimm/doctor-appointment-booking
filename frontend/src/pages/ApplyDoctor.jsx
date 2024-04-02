import React from 'react'

export default function ApplyDoctor() {
    return (
        <section>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Apply for Doctor</h2>
                        <p>Fill the form below to apply for doctor</p>
                        <hr />
                        <h3 className='text-capitalize'>Personal information</h3>

                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" id="address" required />
                                    </div>
                                </div>
                                <hr className='mt-4' />
                                <h3 className='text-capitalize'>Professional information</h3>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="speciality">Speciality</label>
                                        <select className="form-select" name="speciality" id="speciality">
                                            <option value="dentist">Dentist</option>
                                            <option value="cardiologist">Cardiologist</option>
                                            <option value="neurologist">Neurologist</option>
                                            <option value="dermatologist">Dermatologist</option>
                                            <option value="ophthalmologist">Ophthalmologist</option>
                                            <option value="gynecologist">Gynecologist</option>
                                            <option value="orthopedic">Orthopedic</option>
                                            <option value="pediatrician">Pediatrician</option>
                                            <option value="psychiatrist">Psychiatrist</option>
                                            <option value="urologist">Urologist</option>
                                            <option value="endocrinologist">Endocrinologist</option>
                                            <option value="oncologist">Oncologist</option>
                                            <option value="gastroenterologist">Gastroenterologist</option>
                                            <option value="nephrologist">Nephrologist</option>
                                            <option value="pulmonologist">Pulmonologist</option>
                                            <option value="rheumatologist">Rheumatologist</option>
                                            <option value="allergist">Allergist</option>
                                            <option value="anesthesiologist">Anesthesiologist</option>
                                            <option value="radiologist">Radiologist</option>
                                            <option value="pathologist">Pathologist</option>
                                            <option value="physiatrist">Physiatrist</option>
                                            <option value="surgeon">Surgeon</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="degree">Degree</label>
                                        <input type="text" name="degree" className="form-control" id="degree" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="experience">Experience</label>
                                        <input type="number" name="experience" className="form-control" id="experience" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="hospital">Hospital</label>
                                        <input type="text" name="hospital" className="form-control" id="hospital" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="fee">Fee</label>
                                        <input type="number" name="fee" className="form-control" id="fee" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="timings">Timings</label>
                                        <input type="text" name="timings" className="form-control" id="timings" required />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn text-white w-100 mt-3" style={{ backgroundImage: 'linear-gradient(to right, #fc6076, #ff9a44)' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

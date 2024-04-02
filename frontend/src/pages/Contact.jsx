import React from 'react'
import Subscribe from '../components/Subscribe'
// import Breadcum from '../components/Breadcum'

export default function Contact() {
  return (
    <>
      {/* <Breadcum title='Contact Us' /> */}
      <section className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Contact</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui sollicitudin, id vestibulum arcu mattis.
                Quisque non nunc nec nisl tincidunt tincidunt. Nullam nec
                vestibulum nunc. Nulla facilisi. Duis nec semper libero. Nulla
                facilisi. Duis nec semper libero. Nulla facilisi. Duis nec semper
                libero.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-4">
              <h2>Contact Details</h2>
              <p>
                1234 Main St
                <br />
                Springfield, OR 97477
                <br />
                (541) 555-5555
                <br />

                <a href="mailto: " className="text-dark"> admin@mail.com </a>
              </p>

              <h2>Map</h2>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.366288067366!2d-123.02832068448235!3d44.04650917910936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11d2e1b0d4b5f%3A0x3f2f5f3d4b6f2f2e!2s1234%20Main%20St%2C%20Springfield%2C%20OR%2097477%2C%20USA!5e0!3m2!1sen!2snp!4v1618849517933!5m2!1sen!2snp"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>


            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  )
}

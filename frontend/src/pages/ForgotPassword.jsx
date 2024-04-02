import React from 'react'

export default function ForgotPassword() {
    const handleForget = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const response = await fetch('http://localhost:3000/api/user/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        const data = await response.json();
        if (response.ok) {
            alert(data.message)
        } else {
            alert(data.message)
        }
        
    }
    return (
        <section className="min-vh-100 pt-4 " style={{ backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)' }}  >
            <div className="container mx-auto ">
                <div className="row  shadow" style={{ height: '35rem' }}>
                    <div className="col-lg-12 col-md-12 pb-2 text-center text-white rounded d-flex align-items-center justify-content-center flex-column " style={{ backgroundImage: 'linear-gradient(to right, #fc6076, #ff9a44)' }}>
                        <h1 className='text-capitalize '>Forget your password</h1>
                        <p>Enter your email</p>
                        <form onSubmit={handleForget}>
                            <input type="email" name='email' className="form-control mb-2" id="email" placeholder="Enter Your Email" required />
                            <button type="submit" className="btn border border-white text-white " >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

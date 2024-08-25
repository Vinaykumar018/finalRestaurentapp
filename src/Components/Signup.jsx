import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setError('Please agree to the terms and conditions');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { username, email, phone, password });
      console.log(response.data); // Handle successful signup
    } catch (error) {
      setError('Error signing up'); // Handle signup failure
    }
  };

  return (
    <div className="container-fluid bg-dark w-100 vh-100 d-flex justify-content-center align-items-center">
      {/*spinner start */}
      {loading && (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {/*spinner end */}

      {/*signup form start */}
      {!loading && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
              <h1 className="text-white mb-4">Sign Up Here</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-2">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label htmlFor="email">Email ID</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="phone" placeholder="Mobile No" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      <label htmlFor="phone">Mobile Number</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="agreed" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                      <label className="form-check-label" htmlFor="agreed">I Agree to Term & Condition</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Sign Up</button>
                  </div>
                  <div className="col-12">
                    <span className='d-flex justify-content-center fs-5'>Already have an account?<Link to="/signin"><span className="fs-5 mx-2">Sign in</span></Link></span>
                  </div>
                </div>
                {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

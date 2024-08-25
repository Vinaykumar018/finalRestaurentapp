import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data); // Handle successful login
      // Set isLoggedIn state to true and redirect to homepage
      navigate('/');
    } catch (error) {
      setError('Invalid credentials');
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

      {/*login start */}
      {!loading && (
        <>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                <h1 className="text-white mb-4">Sign In Here</h1>
                <form onSubmit={handleLogin}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="name">Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                      </div>
                      <span className="d-flex justify-content-end mt-2 text-muted" style={{ cursor: "pointer" }}>forget password ?</span>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Sign In</button>
                    </div>
                  </div>
                  {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
                  <div className="text-center mt-2 text-light">or continue with</div>
                  <div className="row g-3 mt-2">
                    <div className="col-md-4">
                      <div className="form-floating">
                        <div className="bg-white py-2 rounded-pill text-center" style={{ cursor: "pointer" }}>Google</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <div className="bg-white py-2 rounded-pill text-center" style={{ cursor: "pointer" }}>Facebook</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating ">
                        <div className="bg-white py-2 rounded-pill text-center" style={{ cursor: "pointer" }}>Twitter</div>
                      </div>
                    </div>
                  </div>
                  <div className='row my-2'>
                    <div className="col-12">
                      <span className='d-flex justify-content-center fs-5'>Don't have an account?<Link to="/signup"><span className="fs-5 mx-2">sign up</span></Link></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Login;

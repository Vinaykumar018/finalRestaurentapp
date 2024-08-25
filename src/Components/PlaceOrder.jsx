import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PlaceOrder = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);
    return (
       
              <div className="container-fluid bg-white p-0">
                    {loading && (
        
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem" }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
                    )}

{!loading && (
     <>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/home" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link ">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/menu" className="nav-item nav-link">Menu</Link>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/booking" className="dropdown-item active">Booking</Link>
                  <Link to="/team" className="dropdown-item">Our Team</Link>
                  <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                  <Link to="/card" className="dropdown-item">Cart</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
           <Link to="booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>

            <div className="container-fluid py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Place Order</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Place Order</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <div className="container-fluid py-1 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className='row bg-white d-flex px-5 my-2'>
                <div className="col-md-6 px-2 mr-2">
                    <h2>Delivery Information</h2>
                    <form action="" className='row place-order'>
                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="first_name" placeholder="First Name"/>
                                <label for="name">First Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="last_name" placeholder="Last Name"/>
                                <label for="name">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div class="col-md-12">
                            <div className="form-floating">
                                <input type="email" class="form-control" id="email" placeholder='Email Address'/>
                                <label for="email">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div class="col-md-12">
                            <div className="form-floating">
                                <input type="text" class="form-control" id="" placeholder="name@example.com"/>
                                <label for="exampleFormControlInput1">Street</label>
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="city" placeholder="City"/>
                                <label for="city">City</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="state" placeholder="State"/>
                                <label for="state">State</label>
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="city" placeholder="Zip Code"/>
                                <label for="zip_code">Zip Code</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="state" placeholder="Country"/>
                                <label for="country">Country</label>
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="phone" placeholder="Mobile Number"/>
                                <label for="phone">Mobile Number</label>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="row cart-total-details">
                            <p className='col-md-6'>Subtotal</p>
                            <p className='col-md-6 d-flex justify-content-end'>{0}</p>
                        </div>
                        <hr className='m-0'/>
                        <div className="row cart-total-details mt-1">
                            <p className='col-md-6'>Delivery Fee</p>
                            <p className='col-md-6 d-flex justify-content-end'>{2}</p>
                        </div>
                        <hr className='m-0'/>
                        <div className="row cart-total-details mt-1">
                            <p className='col-md-6'><b>Total</b></p>
                            <p className='col-md-6 d-flex justify-content-end'><b>{0}</b></p>
                        </div>
                        <hr className='m-0'/>
                    </div>
                    <div className="row g-2 mt-2">
                        <div class="col-md-12">
                            <div className="form-floating">
                                <button className='btn btn-primary'>PROCEED TO PAYMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <Link className="btn btn-link" to="">About Us</Link>
                        <Link className="btn btn-link" to="">Contact Us</Link>
                        <Link className="btn btn-link" to="">Reservation</Link>
                        <Link className="btn btn-link" to="">Privacy Policy</Link>
                        <Link className="btn btn-link" to="">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth:"480px"}}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved. 
							
							
							Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link><br/><br/>
                            Distributed By <Link className="border-bottom" to="https://themewagon.com" target="_blank">ThemeWagon</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="">Home</Link>
                                <Link to="">Cookies</Link>
                                <Link to="">Help</Link>
                                <Link to="">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
      
        <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
        </>)} </div>
        
    )}

export default PlaceOrder;

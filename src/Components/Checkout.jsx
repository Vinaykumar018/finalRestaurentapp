import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';       // Import Font Awesome icons
import { faHouse } from '@fortawesome/free-solid-svg-icons';            // Import home icon
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';      // Import the location icon
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';       // Import the credit card icon
import { faUniversity } from '@fortawesome/free-solid-svg-icons';       // Import the bank icon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';       // Import the normal arrow icon
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'; // Import the circular arrow icon
import { faUser } from '@fortawesome/free-solid-svg-icons';             // Import user icon
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';      // Import check icon

import MyMapComponent from './Map'; // Import the Map component
import '../ComponentCss/Checkout.css';

const Paymentform = () => {

    const sections = {
        card: 'cardSection',
        gpay: 'gpaySection',
        bank: 'bankSection',
    };

    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState(sections.card);
    const [showTag, setShowTag] = useState(false);

    // JavaScript functions and constants at the top
    const handleToggle = (setActiveSection) => (section) => {
        setActiveSection(section);
        setShowTag(false);
    };

    const handleIconClick = () => {
        setShowTag(!showTag);
    };

    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleDeliverHereClick = (address) => {
        setSelectedAddress(address);
    };

    const handleChangeAddressClick = () => {
        setSelectedAddress(null);
    };

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
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link ">About</Link>
                    <Link to="/service" className="nav-item nav-link">Service</Link>
                    <Link to="/menu" className="nav-item nav-link">Menu</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                        <Link to="/booking" className="dropdown-item active">Booking</Link>
                        <Link to="/team" className="dropdown-item">Our Team</Link>
                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                        <Link to="/card" className="dropdown-item">View Cart</Link>
                        <Link to="/checkout" className="dropdown-item">Checkout</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
                        </div>
                    </nav>

                    <div className="container-fluid py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Checkout</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Checkout</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-1 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className='row g-3'>
                        <div className='col-md-6 bg-white ps-5 my-2'>
                            {selectedAddress ? (
                                    <div className='card bg-white border-0 shadow p-4'>
                                        <div className="card-header checkIcon">
                                            <h5 className="card-title">Delivery Address</h5>
                                            <div className="icon-container">
                                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', fontSize: '24px' }} size="1x" id="checkIcon" className="my-1" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-md-12 bg-white d-flex align-items-center my-2'>
                                                    <div className='card border-0 shadow d-flex flex-row w-100'>
                                                        <div className="card-header">
                                                            <FontAwesomeIcon icon={faHouse} />
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{selectedAddress.title}</h5>
                                                            <p className="card-text">{selectedAddress.address}</p>
                                                            <button className='btn btn-primary btn-sm' onClick={handleChangeAddressClick}>
                                                                Change Address
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ) : (
                                <div className='card bg-white border-0 shadow p-4'>
                                    <div className="card-header">
                                        <h5 className="card-title">Select Delivery Address</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-md-6 bg-white d-flex align-items-center my-2'>
                                                <div className='card border-0 shadow d-flex flex-row w-100' id="selected-address">
                                                    <div className="card-header">
                                                        <FontAwesomeIcon icon={faHouse} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Home</h5>
                                                        <p className="card-text">1-90/30, Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081, India.</p>
                                                        <button
                                                            className='btn btn-primary btn-sm'
                                                            onClick={() => handleDeliverHereClick({ title: 'Home', address: '1-90/30, Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081, India.' })}
                                                        >
                                                            Deliver Here
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-6 bg-white d-flex align-items-center my-2'>
                                                <div className='card border-0 shadow d-flex flex-row w-100' id="select-address">
                                                    <div className="card-header">
                                                        <FontAwesomeIcon icon={faLocationDot} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Add New Address</h5>
                                                        <button className='btn btn-primary btn-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                            ADD NEW
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Select Your Delivery Location</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    {/* <MyMapComponent /> Map embedded here */}
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60899.74267955487!2d78.35044544777438!3d17.448514697054215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1725194034710!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className='card bg-white border-0 shadow p-4 mt-2'>
                                <div className="card-header">
                                    <h5 className="card-title">Payment</h5>
                                </div>
                                {selectedAddress && (
                                    <div className="card-body">
                                        <button className='btn btn-primary btn-sm'>PROCEED TO PAY</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='col-md-6 bg-white pe-5 my-2'>
                            <div className='card bg-white border-0 shadow p-4 w-100'>
                                <div className='card-header'>
                                    <h5 className="card-title">Choose Payment Method</h5>
                                </div>
                                <div className='card-body'>
                                    <nav className="nav flex-row row">
                                        <a className={`nav-link col-4 ${activeSection === sections.card ? 'text-tertiary' : 'text-secondary'}`} onClick={() => handleToggle(setActiveSection)(sections.card)}>
                                            <div className={`card bg-white rounded-lg border-2 shadow d-flex align-items-center ${activeSection === sections.card ? 'active-link' : ''}`}>
                                                <FontAwesomeIcon icon={faCreditCard} size="1x" className="my-2" /> 
                                                <div className="card-body">
                                                    <span>Card</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a className={`nav-link col-4 ${activeSection === sections.gpay ? 'text-tertiary' : 'text-secondary'}`} onClick={() => handleToggle(setActiveSection)(sections.gpay)}>
                                            <div className={`card bg-white rounded-lg border-2 shadow d-flex align-items-center ${activeSection === sections.gpay ? 'active-link' : ''}`}>  
                                                <img src="img/gpay.png" alt="Google Pay" width="32" className="my-2"/>
                                                <div className="card-body">
                                                    <span>Google Pay</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a className={`nav-link col-4 ${activeSection === sections.bank ? 'text-tertiary' : 'text-secondary'}`} onClick={() => handleToggle(setActiveSection)(sections.bank)}>  
                                            <div className={`card bg-white rounded-lg border-2 shadow d-flex align-items-center ${activeSection === sections.bank ? 'active-link' : ''}`}>  
                                                <FontAwesomeIcon icon={faUniversity} size="1x" className="my-2" />
                                                <div className="card-body">
                                                    <span>Bank</span>
                                                </div>
                                            </div>
                                        </a>
                                    </nav>

                                    <div id="cardSection" className="row card-no mt-2 g-2" style={{ display: activeSection === sections.card ? 'flex' : 'none' }}>
                                        {/* Card Options */}
                                        <div>
                                            <h5>Payment By Card</h5>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="cardNo" placeholder='Enter Card Number' />
                                                <label htmlFor="cardNo">Card Number</label>
                                                <div className="icon-container">
                                                    <img src="img/credit-card.webp" alt="" width="60px" height="40px"/>
                                                </div>
                                                <div className="icon-container1">
                                                    <img src="img/rg-card.png" alt="" width="60px" height="40px"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="cardNo" placeholder='Enter Card Holder Name' />
                                                <label htmlFor="cardNo">Card Holder Name</label>
                                                <div className="icon-container">
                                                    <FontAwesomeIcon icon={faUser} size="1x" className="my-2" /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="date" className='form-control bg-light border-0' id="Expiry" placeholder='Enter Expiry Date' />
                                                <label htmlFor="Expiry">Expiry Date</label>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="cvc" placeholder='Enter CVC' />
                                                <label htmlFor="cvc">CVC</label>
                                                <div className="icon-container">
                                                    <FontAwesomeIcon icon={faCreditCard} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className='btn btn-primary w-100'>Verify & Pay</button>
                                        </div>
                                    </div>

                                    <div id="gpaySection" className="row card-no mt-2 g-2" style={{ display: activeSection === sections.gpay ? 'flex' : 'none' }}>
                                        {!showTag && (
                                            <>
                                                {/* UPI Options */}
                                                <div>
                                                    <h5>Select UPI for Payment</h5>
                                                </div>
                                                <div className="col-12">
                                                    <div className="pay form-control bg-light border-0 rounded-2 d-flex align-items-center">
                                                        <img src="img/paytm.webp" alt="Google Pay" width="40" className="my-1 me-2 border-4 bg-white rounded-circle p-2"/>
                                                        <span>Paytm</span>
                                                        <FontAwesomeIcon icon={faArrowCircleRight} className="arrow" onClick={handleIconClick} style={{ cursor: 'pointer' }}/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="pay form-control bg-light border-0 rounded-2 d-flex align-items-center">
                                                        <img src="img/phonepe.webp" alt="Google Pay" width="40" className="my-1 me-2 border-4 bg-white rounded-circle p-2"/>
                                                        <span>Phone Pe</span>
                                                        <FontAwesomeIcon icon={faArrowCircleRight} className="arrow" onClick={handleIconClick} style={{ cursor: 'pointer' }}/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="pay form-control bg-light border-0 rounded-2 d-flex align-items-center">
                                                        <img src="img/gpay.jpeg" alt="Google Pay" width="40" className="my-1 me-2 border-4 bg-white rounded-circle p-2"/>
                                                        <span>G pay</span>
                                                        <FontAwesomeIcon icon={faArrowCircleRight} className="arrow" onClick={handleIconClick} style={{ cursor: 'pointer' }}/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="pay form-control bg-light border-0 rounded-2 d-flex align-items-center">
                                                        <img src="img/bhim.png" alt="Google Pay" width="40" className="my-1 me-2 border-4 bg-white rounded-circle p-2"/>
                                                        <span>Bhim pay</span>
                                                        <FontAwesomeIcon icon={faArrowCircleRight} className="arrow" onClick={handleIconClick} style={{ cursor: 'pointer' }}/>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {showTag && (
                                            <>
                                                {/* UPI ID Input Form */}
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="text" className='form-control bg-light border-0' id="upiId" placeholder='Enter UPI ID' />
                                                        <label htmlFor="upiId">Enter UPI ID</label>
                                                    </div>
                                                </div>

                                                <div className="col-8">
                                                    <button className='btn btn-primary w-100'>Verify & Pay</button>
                                                </div>

                                                <div className="col-4">
                                                    <button className='btn btn-primary w-100' onClick={() => setShowTag(false)}>Back</button>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div id="bankSection" className="row card-no mt-2 g-2" style={{ display: activeSection === sections.bank ? 'flex' : 'none' }}>
                                        {/* Bank Options */}
                                        <div>
                                            <h5>Fill Bank Details For Payment</h5>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="accNo" placeholder='Enter Card Number' />
                                                <label htmlFor="accNo">Bank Account Number</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="accHolder" placeholder='Enter Bank Holder Name' />
                                                <label htmlFor="accHolder">Bank Holder Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className='form-control bg-light border-0' id="cardNo" placeholder='Enter Card Holder Name' />
                                                <label htmlFor="cardNo">Bank IFSC Code</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className='btn btn-primary w-100'>Verify & Pay</button>
                                        </div>
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
            </>
        )} </div>
    )}

export default Paymentform;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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

  {/* Spinner End */}
  {/* Navbar & Hero Start */}
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
                  <Link to="/booking" className="dropdown-item">Booking</Link>
                  <Link to="/team" className="dropdown-item">Our Team</Link>
                  <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link active">Contact</Link>
            </div>
           <Link to="/booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
      </div>
    </nav>
    <div className="container-fluid py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-4">
              <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
              <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
            </div>
            <div className="col-md-4">
              <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
              <p><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
            </div>
            <div className="col-md-4">
              <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
              <p><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 150}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
          <Link className="btn btn-link" to="">About Us</Link>
          <Link className="btn btn-link" to="">Contact Us</Link>
          <Link className="btn btn-link" to="">Reservation</Link>
          <Link className="btn btn-link" to="">Privacy Policy</Link>
          <Link className="btn btn-link" to="">Terms &amp; Condition</Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube" /></Link>
            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in" /></Link>
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
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link><br /><br />
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
  {/* Footer End */}
  {/* Back to Top */}
  <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></Link>
  </>)} </div>

    );
}

export default Contact;

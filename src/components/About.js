import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import ramana from '../images/p3.jpeg'
import qt from '../images/qtimg.jpg';
import '../App.css';
import logo1 from '../images/amd.png';
import logo2 from '../images/facebook.png';
import logo3 from '../images/ibm.png';
import logo4 from '../images/janssen.png';
import logo5 from '../images/microsoft.png';
import logo6 from '../images/uber.png';
import logo7 from '../images/stripe.png';
import logo8 from '../images/raspberry-pi.png';
import logo9 from '../images/paypal.png';
import logo10 from '../images/New-Project.png.webp'
import thumbnail from '../images/thumbnail.jpeg'
import Footer from './Footer';

const About = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
 },[]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <section className='header'>
        <div style={{ background: '#013356' }}>
          <ul className='d-flex justify-content-end text-nowrap align-items-center header w-100 text-white p-2 fw-bold' style={{ listStyle: 'none' }}>
            <NavLink to='/about' className='text-decoration-none  text-white'>
              <li className='mx-lg-3 navlink'>
                About RamanaSoft
              </li>
            </NavLink>
            <NavLink to='/about-staff-hiring' className='text-decoration-none  text-white'>
            <li className='mx-lg-3 navlink'>
              About IT Staffing
            </li>
            </NavLink>
            <li className='mx-lg-3'>
              CSR
            </li>
            <NavLink to='/contact' className='text-decoration-none  text-white'>
              <li className='mx-lg-3 navlink'>
                Contact Us
              </li>
            </NavLink>
            <li className='mx-lg-3'>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className='mx-3'>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li className='mx-3'>
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </section>
      <section className='logo-bar'>
        <div className='d-flex justify-content-between align-items-center m-3'>
          {/* Logo on the left */}
          <Link to='/'>
            <img src={ramana} alt="ramanaSoft" className='rounded ramana' width={'250px'} />
          </Link>
          {/* Hamburger icon for small screens */}
          <div className='d-md-none'>
            <button className='btn border text-nowrap' onClick={() => setShowMenu(!showMenu)}>
              <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          {/* Buttons */}
          <div className={`d-none d-md-flex ${showMenu ? 'd-none' : 'd-flex'}`}>
            <Link to='/'>
              <button className='btn border text-nowrap  btn-outline-info  fw-bold' style={{ color: '#013356' }}>I am Looking For A Job</button>
            </Link>
            <Link to='/hire'>
              <button className='btn border text-nowrap  ms-2 btn-outline-info fw-bold' style={{ color: '#013356' }}>I am Looking For Candidates</button>
            </Link>
          </div>
        </div>
        {/* Buttons for small screens */}
        <div className={`d-md-none ${showMenu ? 'd-block' : 'd-none'} bg-secondary-subtle rounded mb-2 p-1`}>
          <button className='btn border-dark text-nowrap  fw-bold mb-2' style={{ color: '#013356' }}>I am Looking For A Job</button>

          <button className='btn border-dark text-nowrap fw-bold mb-2' style={{ color: '#013356' }}>I am Looking For Candidates</button>
        </div>
      </section>
      <section className='about'>
        <div className='p-2'>
          <img src={qt} alt='logo' className='qt img-fluid'/>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <h2 className='text-center fw-bold w-50 quote' style={{color:'#013356'}}>India's Premier Software Training Institute
            Ready To Take Your Software Skills To The Next Level</h2>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-evenly mt-4  pt-4'>
          <div className='border rounded px-5 py-2 '>
            <h1 className='text-center fw-bold'>50000+</h1>
            <h3 className='text-secondary'>Students Trained</h3>
          </div>
          <div className='border rounded px-5 py-2'>
            <h1 className='text-center fw-bold'>15000+</h1>
            <h3 className='text-secondary'>Students Placed</h3>
          </div>
          <div className='border rounded px-5 py-2'>
            <h1 className='text-center fw-bold'>250+</h1>
            <h3 className='text-secondary'>Placement Companies</h3>
          </div>
          <div className='border rounded px-5 py-2'>
            <h1 className='text-center fw-bold'>14</h1>
            <h3 className='text-secondary'>Years of Students Trust</h3>
          </div>
        </div>
      </section>
      <section className='companies'>
        <div className='mt-5 pt-5'>
          <h1 className='text-center'style={{color:'#013356'}}>Out Top Recruiters</h1>
          <marquee scrollamount="15" behavior="scroll" direction="left" loop="true">
  <div className="d-flex justify-content-evenly align-items-center mt-4 rounded p-3">
    <div>
      <img src={logo1} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo2} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo3} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo4} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo5} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo6} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo7} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo8} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo9} alt="companies logo" className="comlogo" />
    </div>
    <div>
      <img src={logo1} alt="companies logo" className="comlogo" />
    </div>
  </div>
</marquee>
        </div>
      </section>
      <section className='social media mt-5 pt-4'>
        <div>
          <h1 className='text-center mb-3' style={{color:'#013356'}}>Find Us On Social Media</h1>
        </div>
        
        <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2rsWowq4Qq8?si=1jcTXNQ9408BXHxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='rounded shadow iframe mb-2 mb-md-0'></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oBJaGiyGKLE?si=MBC03JAJnvxrh2EI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded shadow iframe '></iframe>
        </div>
        <div className='mt-5 d-flex justify-content-center'>
          <img src={logo10} alt='social media ' className='w-50 newspaper shadow'/>
        </div>
        <div className='p-2'>
      <img src={thumbnail} alt='thumbnail' className='w-100'/>
      </div>
      </section>
      {showBackToTop && (
        <div className="back-to-top" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999' }} onClick={scrollToTop}>
          <button className='p-2 rounded  btn btn-outline-dark' title='back to top'>
            <i className="fas fa-arrow-up  text-warning fs-5"></i>
          </button>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default About

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PageHero from "./PageHero";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [contact, setContact] = useState([]);
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/contact`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    // <>
    //   <div id="page" className="page">
    //     {shouldRenderPageHero && <PageHero />}
    //     <header id="header" className="header tra-menu navbar-dark dark-scroll">
    //       <div className="header-wrapper">
    //         <div className="wsmobileheader clearfix">
    //           <Link id="wsnavtoggle" className="wsanimated-arrow">
    //             <span />
    //           </Link>
    //           <span className="smllogo smllogo-black">
    //             <>
    //               <Link to="/">
    //                 {logo.length > 0 && (
    //                   <img
    //                     src={logo[0].logo}
    //                     width={162}
    //                     height={40}
    //                     alt="header-logo"
    //                   />
    //                 )}
    //               </Link>
    //             </>
    //           </span>
    //           <span className="smllogo smllogo-white">
    //             <>
    //               <Link to="/">
    //                 {logo.length > 0 && (
    //                   <img
    //                     src={logo[0].logo}
    //                     width={162}
    //                     height={40}
    //                     alt="header-logo"
    //                   />
    //                 )}
    //               </Link>
    //             </>
    //           </span>
    //           <a href="mailto:email@website.com" className="callusbtn">
    //             <i className="fas fa-envelope" />
    //           </a>
    //         </div>
    //         {/* NAVIGATION MENU */}
    //         <div className="wsmainfull menu clearfix">
    //           <div className="wsmainwp clearfix">
    //             {/* LOGO IMAGE */}
    //             {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) */}
    //             <div className="desktoplogo">
    //               <Link to="/" className="logo-black">
    //                 {logo.length > 0 && (
    //                   <img
    //                     src={logo[1].logo}
    //                     width={162}
    //                     height={40}
    //                     alt="header-logo"
    //                   />
    //                 )}
    //               </Link>
    //             </div>
    //             <div className="desktoplogo">
    //               <Link to="/" className="logo-white">
    //                 {logo.length > 0 && (
    //                   <img
    //                     src={logo[0].logo}
    //                     width={162}
    //                     height={40}
    //                     alt="header-logo"
    //                   />
    //                 )}
    //               </Link>
    //             </div>
    //             {/* MAIN MENU */}
    //             <nav className="wsmenu clearfix blue-header">
    //               <ul className="wsmenu-list">
    //                 <li className="nl-simple">
    //                   <Link to="/" aria-haspopup="true">
    //                     Home
    //                   </Link>
    //                 </li>
    //                 <li className="nl-simple">
    //                   <Link to="/services" aria-haspopup="true">
    //                     Services
    //                   </Link>
    //                 </li>
    //                 <li className="nl-simple">
    //                   <Link to="/pricing" aria-haspopup="true">
    //                     Pricing
    //                   </Link>
    //                 </li>
    //                 <li className="nl-simple">
    //                   <Link to="/about-us" aria-haspopup="true">
    //                     About Us
    //                   </Link>
    //                 </li>
    //                 <li className="nl-simple">
    //                   <Link to="/contact-us" aria-haspopup="true">
    //                     Contact Us
    //                   </Link>
    //                 </li>
    //                 {/* <li className="nl-simple mobile_link">
    //                   <div className="menu-container">
    //                     {user ? (
    //                       <Link
    //                         className="btn btn-md btn-primary tra-black-hover"
    //                         to="/user-dashboard"
    //                       >
    //                         <span>Dashboard</span>
    //                       </Link>
    //                     ) : (
    //                       <Link
    //                         to="/login"
    //                         className="btn btn-md btn-primary tra-black-hover"
    //                       >
    //                         <span>Login Now</span>
    //                       </Link>
    //                     )}
    //                   </div>
    //                 </li> */}

    //                 {contact.map((e) => (
    //                   <li className="nl-simple green-scroll">
    //                     <a
    //                       href={`mailto:${e.email}`}
    //                       aria-haspopup="true"
    //                       className="callusbtn"
    //                     >
    //                       <i className="fas fa-envelope" />
    //                     </a>
    //                   </li>
    //                 ))}

    //                 <li class="nl-simple">
    //                   {user ? (
    //                     <Link
    //                       className="btn btn-md btn-primary tra-black-hover last-link"
    //                       to="/user-dashboard"
    //                     >
    //                       <span>Dashboard</span>
    //                     </Link>
    //                   ) : (
    //                     <Link
    //                       to="/login"
    //                       className="btn btn-md btn-primary tra-black-hover last-link"
    //                     >
    //                       <span>Login Now</span>
    //                     </Link>
    //                   )}
    //                 </li>
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //     </header>
    //   </div>
    // </>

    <>
  <header className="site_header site_header_2">
  <div className="container">
    <div className="row align-items-center">
      <div className="col col-lg-3 col-5">
        {
          logo.map(l=><div className="site_logo">
          <a className="site_link" href="/">
            <img src={l.logo} alt="Logo" />
          </a>
        </div>)
        }
        
      </div>
      <div className="col col-lg-6 col-2">
        <nav className="main_menu navbar navbar-expand-lg">
          <div className="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
            <ul className="main_menu_list unordered_list_center">
              <li className="dropdown active">
                <a className="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <ul className="dropdown-menu" aria-labelledby="home_submenu">
                  <li><a href="index.html">Home V.1</a></li>
                  <li className="active"><a href="index_2.html">Home V.2</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="nav-link" href="#" id="service_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="service_submenu">
                  <li className="dropdown">
                    <a className="nav-link" href="#" id="courses_layout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Courses Layout
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="courses_layout_submenu">
                      <li><a href="course.html">Courses Grid</a></li>
                      <li><a href="course_list.html">Courses List</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="nav-link" href="#" id="courses_details_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Courses Details
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="courses_details_submenu">
                      <li><a href="course_details.html">Course Details V.1</a></li>
                      <li><a href="course_details_2.html">Course Details V.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="nav-link" href="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pages_submenu">
                  <li><a href="about.html">About</a></li>
                  <li className="dropdown">
                    <a className="nav-link" href="#" id="mentors_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Our Mentors
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="mentors_submenu">
                      <li><a href="mentor.html">Mentors</a></li>
                      <li><a href="mentor_details.html">Mentors Details</a></li>
                    </ul>
                  </li>
                  <li><a href="faq.html">F.A.Q.</a></li>
                  <li className="dropdown">
                    <a className="nav-link" href="#" id="events_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Our Events
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="events_submenu">
                      <li><a href="event.html">Events</a></li>
                      <li><a href="event_details.html">Event Details</a></li>
                    </ul>
                  </li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="error.html">404 Error</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="blog_submenu">
                  <li><a href="blog.html">Our Blogs</a></li>
                  <li><a href="blog_details.html">Blog Details</a></li>
                </ul>
              </li>
              <li><a className="nav-link" href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col col-lg-3 col-5">
        <ul className="header_btns_group unordered_list_end">
          <li>
            <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
              <i className="far fa-bars" />
            </button>
          </li>
          <li>
            <a className="btn border_dark" href="login.html">
              <span>
                <small>Login</small>
                <small>Login</small>
              </span>
            </a>
          </li>
          <li>
            <a className="btn btn_dark" href="signup.html">
              <span>
                <small>Sign Up</small>
                <small>Sign Up</small>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

    
    </>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState([]);
  const [social, setSocial] = useState([]);
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setSocial(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/contact`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const newsLetter = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    const contact = {
      email,
    };

    const url = `http://localhost:5000/add-newsLetter/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/news-letter-submit");
      });
  };
  const blackLogo = logo.find((logo) => logo.logoFor === "black");

  return (
    // <>
    //   <footer id="footer-2" className="pt-100 footer division">
    //     <div className="container">
    //       {/* FOOTER CONTENT */}
    //       <div className="row">
    //         {/* FOOTER INFO */}
    //         <div className="col-md-10 col-lg-4">
    //           <div className="footer-info mb-40">
    //             {/* Footer Logo */}
    //             {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 364 x 90 pixels) */}

    //             {blackLogo && (
    //               <img
    //                 src={blackLogo.logo}
    //                 width={182}
    //                 height={45}
    //                 alt="Black Logo"
    //               />
    //             )}

    //             {/* Text */}
    //             <p>{footer.map((e) => e.FooterAbout)}</p>
    //           </div>
    //         </div>
    //         {/* FOOTER PRODUCTS LINKS */}
    //         <div className="col-md-3 col-lg-2 col-xl-2">
    //           <div className="footer-links mb-40">
    //             {/* Title */}
    //             <h5 className="h5-sm indigo-color">Quick Links</h5>
    //             {/* Footer Links */}
    //             <ul className="foo-links clearfix">
    //               <li className="nl-simple">
    //                 <Link to="/" aria-haspopup="true">
    //                   Home
    //                 </Link>
    //               </li>
    //               <li className="nl-simple">
    //                 <Link to="/services" aria-haspopup="true">
    //                   Services
    //                 </Link>
    //               </li>
    //               <li className="nl-simple">
    //                 <Link to="/pricing" aria-haspopup="true">
    //                   Pricing
    //                 </Link>
    //               </li>
    //               <li className="nl-simple">
    //                 <Link to="/about-us" aria-haspopup="true">
    //                   About Us
    //                 </Link>
    //               </li>
    //               <li className="nl-simple">
    //                 <Link to="/contact-us" aria-haspopup="true">
    //                   Contact Us
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         {/* FOOTER COMPANY LINKS */}
    //         <div className="col-md-4 col-lg-3 col-xl-3">
    //           <div className="footer-links mb-40">
    //             {/* Title */}
    //             <h5 className="h5-sm indigo-color">Quick Connect</h5>
    //             {/* Footer Links */}
    //             {contact.map((e) => (
    //               <ul className="clearfix">
    //                 <li>
    //                   <p>
    //                     <a href={`tel:${e.phone}`}>{e.phone}</a>
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <p className="last-li">
    //                     <a href={`mailto:${e.email}`}>{e.email}</a>
    //                   </p>
    //                 </li>
    //                 <li>
    //                   <p className="last-li">{e.address}</p>
    //                 </li>
    //               </ul>
    //             ))}
    //           </div>
    //         </div>
    //         {/* FOOTER NEWSLETTER FORM */}
    //         <div className="col-md-5 col-lg-3 col-xl-3">
    //           <div className="footer-form mb-20">
    //             {/* Title */}
    //             <h5 className="h5-sm indigo-color">Follow the Best</h5>
    //             {/* Newsletter Form Input */}
    //             <form className="newsletter-form" onSubmit={newsLetter}>
    //               <div className="input-group">
    //                 <input
    //                   type="email"
    //                   className="form-control"
    //                   placeholder="Email Address"
    //                   required=""
    //                   name="email"
    //                 />
    //                 <span className="input-group-btn">
    //                   <button type="submit" className="btn">
    //                     <i className="far fa-arrow-alt-circle-right" />
    //                   </button>
    //                 </span>
    //               </div>
    //               {/* Newsletter Form Notification */}
    //               <label htmlFor="s-email" className="form-notification" />
    //             </form>
    //           </div>
    //         </div>{" "}
    //         {/* END FOOTER NEWSLETTER FORM */}
    //       </div>{" "}
    //       {/* END FOOTER CONTENT */}
    //       {/* BOTTOM FOOTER */}
    //       <div className="bottom-footer">
    //         <div className="row">
    //           {/* FOOTER COPYRIGHT */}
    //           <div className="col-lg-8">
    //             <ul className="bottom-footer-list">
    //               <li>
    //                 <p>{footer.map((e) => e.CopyRight)}</p>
    //               </li>
    //             </ul>
    //           </div>
    //           {/* FOOTER SOCIALS LINKS */}

    //           {social.map((e) => (
    //             <div className="col-lg-4 text-right">
    //               <ul className="foo-socials text-center clearfix">
    //                 <li>
    //                   <Link to={e.facebook} className="ico-facebook">
    //                     <i className="fab fa-facebook-f" />
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link to={e.twitter} className="ico-twitter">
    //                     <i className="fab fa-twitter" />
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link to={e.instragram} class="ico-instagram">
    //                     <i class="fab fa-instagram"></i>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link to={e.youtube} class="ico-youtube">
    //                     <i class="fab fa-youtube"></i>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link to={e.linkedin} class="ico-linkedin">
    //                     <i class="fab fa-linkedin-in"></i>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           ))}
    //         </div>
    //       </div>{" "}
    //       {/* END BOTTOM FOOTER */}
    //     </div>{" "}
    //     {/* End container */}
    //   </footer>
    // </>
    <>
  <footer className="site_footer">
  <div className="footer_widget_area">
    <div className="container">
      <div className="row">
        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="footer_widget">
            <div className="site_logo">
              <a className="site_link" href="index.html">
                <img src="assets/images/logo/site_logo_2.svg" alt="Collab - Online Learning Platform" />
              </a>
            </div>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <ul className="social_links unordered_list">
              <li>
                <a href="#!"><i className="fab fa-facebook-f" /></a>
              </li>
              <li>
                <a href="#!"><i className="fab fa-youtube" /></a>
              </li>
              <li>
                <a href="#!"><i className="fab fa-twitter" /></a>
              </li>
              <li>
                <a href="#!"><i className="fab fa-linkedin-in" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="row">
            <div className="col col-md-4 col-sm-4">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Links</h3>
                <ul className="page_list unordered_list_block">
                  <li>
                    <a href="about.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="course.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="mentor.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Mentors</span>
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Prices</span>
                    </a>
                  </li>
                  <li>
                    <a href="event.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Events</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-md-4 col-sm-4">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Class</h3>
                <ul className="page_list unordered_list_block">
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Programming</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Art &amp; Design</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Business</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Engineering</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Photography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-md-4 col-sm-4">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Support</h3>
                <ul className="page_list unordered_list_block">
                  <li>
                    <a href="contact.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Help Center</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Contacts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Security</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="item_icon"><i className="fas fa-caret-right" /></span>
                      <span className="item_text">Private Police</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="footer_widget">
            <h3 className="footer_widget_title">Latest Posts</h3>
            <ul className="blog_small_group unordered_list_block">
              <li>
                <a className="blog_small" href="blog_details.html">
                  <span className="item_image">
                    <img src="assets/images/blog/blog_small_img_1.jpg" alt="Collab – Online Learning Platform" />
                  </span>
                  <span className="item_content">
                    <span className="item_author"><i className="fas fa-user-alt" /> by Corabelle Durrad</span>
                    <strong className="item_title">See How Michaele Built a New Life and Career</strong>
                    <small className="item_post_date">October 12, 2023</small>
                  </span>
                </a>
              </li>
              <li>
                <a className="blog_small" href="blog_details.html">
                  <span className="item_image">
                    <img src="assets/images/blog/blog_small_img_2.jpg" alt="Collab – Online Learning Platform" />
                  </span>
                  <span className="item_content">
                    <span className="item_author"><i className="fas fa-user-alt" /> by Corabelle Durrad</span>
                    <strong className="item_title">See How Michaele Built a New Life and Career</strong>
                    <small className="item_post_date">October 12, 2023</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright_widget">
    <div className="container">
      <p className="copyright_text text-center mb-0">
        <a href="https://themeforest.net/user/merkulove">Merkulove</a> © <b>Collab</b> Template All rights reserved Copyrights 2023
      </p>
    </div>
  </div>
</footer>


    </>
  );
};

export default Footer;

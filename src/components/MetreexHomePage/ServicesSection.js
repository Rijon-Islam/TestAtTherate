import React, { useEffect, useState } from "react";

const ServicesSection = () => {
  const [service, setService] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/services-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    // <>
    //   <section id="services-2" className="wide-30 services-section division">
    //     <div className="container">
    //       <div className="row">
    //         <div
    //           className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
    //           data-wow-delay="0.2s"
    //         >
    //           {title.map((e) => (
    //             <>
    //               <h3 className="h3-lg indigo-color" data-wow-delay="0.4s">
    //                 {e.title}
    //               </h3>

    //               <p className="p-lg">{e.desc}</p>
    //             </>
    //           ))}
    //         </div>
    //       </div>

    //       <div className="row">
    //         {service.map((e, index) => (
    //           <div className="col-sm-6 col-lg-4" key={e._id}>
    //             <div
    //               className="sbox-2 wow fadeInUp"
    //               data-wow-delay={`0.${index + 4}s`}
    //             >
    //               <img
    //                 className="img-85"
    //                 src={e.featureImg}
    //                 alt="feature-icon"
    //               />

    //               <h5 className="h5-md indigo-color">{e.serviceTitle}</h5>

    //               <p className="p-sm grey-color">{e.serviceDesc}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </>

    <>
<section className="courses_section section_space_lg">
  <div className="container">
    <div className="section_heading">
      <div className="row align-items-center">
        <div className="col col-md-6">
          <h2 className="heading_text mb-0">
            Our Courses
          </h2>
        </div>
        <div className="col col-md-6 d-none d-lg-flex justify-content-end">
          <div className="btn_wrap p-0">
            <a className="btn border_dark" href="course.html">
              <span>
                <small>Explore Courses</small>
                <small>Explore Courses</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col col-lg-4">
        <div className="course_card style_2">
          <div className="item_image">
            <a href="course_details.html" data-cursor-text="View">
              <img src="assets/images/course/course_image_4.jpg" alt="Collab – Online Learning Platform" />
            </a>
          </div>
          <div className="item_content">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <ul className="item_category_list unordered_list">
                <li><a href="#!">Programming</a></li>
              </ul>
              <div className="item_price">
                <span className="sale_price">$29.99</span>
                <del className="remove_price">$39.99</del>
              </div>
            </div>
            <ul className="meta_info_list unordered_list">
              <li>
                <i className="fas fa-chart-bar" />
                <span>Beginner</span>
              </li>
              <li>
                <i className="fas fa-clock" />
                <span>120 Hours</span>
              </li>
              <li>
                <i className="fas fa-star" />
                <span>3.5 (3k reviews)</span>
              </li>
            </ul>
            <h3 className="item_title">
              <a href="course_details.html">
                Introduction to Computer Science and Programming
              </a>
            </h3>
            <a className="btn_unfill" href="course_details.html">
              <span className="btn_text">View Course</span>
              <span className="btn_icon">
                <i className="fas fa-long-arrow-right" />
                <i className="fas fa-long-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col col-lg-4">
        <div className="course_card style_2">
          <div className="item_image">
            <a href="course_details.html" data-cursor-text="View">
              <img src="assets/images/course/course_image_5.jpg" alt="Collab – Online Learning Platform" />
            </a>
          </div>
          <div className="item_content">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <ul className="item_category_list unordered_list">
                <li><a href="#!">Marketing</a></li>
              </ul>
              <div className="item_price">
                <span className="sale_price">$9.99</span>
              </div>
            </div>
            <ul className="meta_info_list unordered_list">
              <li>
                <i className="fas fa-chart-bar" />
                <span>Beginner</span>
              </li>
              <li>
                <i className="fas fa-clock" />
                <span>120 Hours</span>
              </li>
              <li>
                <i className="fas fa-star" />
                <span>3.5 (3k reviews)</span>
              </li>
            </ul>
            <h3 className="item_title">
              <a href="course_details.html">
                Marketing Channel Strategy &amp; B2B2C Routes to Market
              </a>
            </h3>
            <a className="btn_unfill" href="course_details.html">
              <span className="btn_text">View Course</span>
              <span className="btn_icon">
                <i className="fas fa-long-arrow-right" />
                <i className="fas fa-long-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col col-lg-4">
        <div className="course_card style_2">
          <div className="item_image">
            <a href="course_details.html" data-cursor-text="View">
              <img src="assets/images/course/course_image_6.jpg" alt="Collab – Online Learning Platform" />
            </a>
          </div>
          <div className="item_content">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <ul className="item_category_list unordered_list">
                <li><a href="#!">Computer Science</a></li>
              </ul>
              <div className="item_price">
                <span className="sale_price">FREE</span>
              </div>
            </div>
            <ul className="meta_info_list unordered_list">
              <li>
                <i className="fas fa-chart-bar" />
                <span>Beginner</span>
              </li>
              <li>
                <i className="fas fa-clock" />
                <span>120 Hours</span>
              </li>
              <li>
                <i className="fas fa-star" />
                <span>3.5 (3k reviews)</span>
              </li>
            </ul>
            <h3 className="item_title">
              <a href="course_details.html">
                Data Science Foundations: Data Structures and Algorithms
              </a>
            </h3>
            <a className="btn_unfill" href="course_details.html">
              <span className="btn_text">View Course</span>
              <span className="btn_icon">
                <i className="fas fa-long-arrow-right" />
                <i className="fas fa-long-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="btn_wrap d-block d-lg-none pb-0 text-center">
      <a className="btn border_dark" href="course.html">
        <span>
          <small>Explore Courses</small>
          <small>Explore Courses</small>
        </span>
      </a>
    </div>
  </div>
</section>


    
    </>
  );
};

export default ServicesSection;

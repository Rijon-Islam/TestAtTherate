import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AboutCompany = () => {
  const [counter, setCounter] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-company-list/`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/company-about-title/`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  return (
    // <>
    //   <section id="reviews-4" className="bg-05 reviews-section division">
    //     <div className="container white-color">
    //       <div className="row d-flex align-items-center">
    //         <div className="col-lg-6">
    //           <div className="small-statistic pc-25">
    //             <div className="row">
    //               {counter.map((e) => (
    //                 <div className="col-sm-6 col-md-3 col-lg-6">
    //                   <div
    //                     className="statistic-block wow fadeInUp"
    //                     data-wow-delay="1s"
    //                   >
    //                     <h5 className="statistic-number primary-color">
    //                       <span className="count-element">
    //                         {e.counterNumber}
    //                       </span>
    //                     </h5>
    //                     <p>{e.counterTitle}</p>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-6">
    //           <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
    //             <div className="quote-ico">
    //               <img
    //                 src="https://jthemes.net/themes/html/metreex/files/images/left-quote.png"
    //                 alt="quote-images"
    //               />
    //             </div>
    //             {about.map((e) => (
    //               <>
    //                 <p>
    //                   "<span>{e.Desc}</span>"
    //                 </p>

    //                 <div className="review-4-author">
    //                   <h5 className="h5-xs">{e.name}</h5>
    //                   <span className="lightgrey-color">{e.companyName}</span>
    //                 </div>
    //               </>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>
     <section>
  <div className="informationmain-con dots-left-img w-100">
    <div className="container overlay-content">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 informationmain-left-con">
          <div className="informationmainleft-sec-img wow slideInLeft">
            <figure className="mb-0">
              <img src="assets/image/informationmain-left-sec-img.png" alt="informationmain-left-sec-img" />
            </figure>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 informationmain-right-con wow slideInRight">
          <div className="informationmain-right-heading">
            <h5>Who we are</h5>
            <h2>Reduce Risk of Your
              Workflow Be Productive
            </h2>
          </div>
          <div className="informationmain-right-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est 
              laborum incidunt ut labore et dolore magnam.
            </p>
            <ul className="mb-0 list">
              <li><i className="fas fa-check-circle" />Aute irure dolor in reprehenderit in voluptate velit esse mollitia.</li>
              <li><i className="fas fa-check-circle" />dolore eu fugiat nulla pariatur excepteur sint occaecat distincto.</li>
              <li><i className="fas fa-check-circle" />Non proident, sunt in culpa qui officia deserunt mollit assumea.</li>
              <li><i className="fas fa-check-circle" />Laborum incidunt ut labore et dolore magnam rugiat  occaecai.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  );
};

export default AboutCompany;

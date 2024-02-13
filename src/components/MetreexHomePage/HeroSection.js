import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const HeroSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [banner, setBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;
    const auditStatus = event.target.auditStatus.value;

    const websiteCheck = {
      email,
      website,
      userMail,
      auditStatus,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/submitted-website");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
    setIsLoading(false);
  }, []);

  return (
    
    <>
 <section className="hero_banner style_2 mouse_move" style={{backgroundImage: 'url("assets/images/shape/shape_img_6.svg")'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col col-lg-6">
        <h1 className="banner_big_title">
          Learn Programming with Online Course
        </h1>
        <p className="banner_description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat
        </p>
        <form action="#">
          <div className="form_item">
            <input type="search" name="search" placeholder="What do you want to learn ?" />
            <button type="submit" className="btn btn_dark">
              <span>
                <small>Search</small>
                <small>Search</small>
              </span>
            </button>
          </div>
        </form>
        <ul className="tags_list unordered_list">
          <li><a href="#!">JAVA</a></li>
          <li><a href="#!">PYTHON</a></li>
          <li><a href="#!">JavaScript</a></li>
          <li><a href="#!">C++</a></li>
          <li><a href="#!">QA</a></li>
          <li><a href="#!">Ruby</a></li>
          <li><a href="#!">Android</a></li>
          <li><a href="#!">.NET</a></li>
          <li><a href="#!">DevOps</a></li>
          <li><a href="#!">Project Manager</a></li>
        </ul>
      </div>
      <div className="col col-lg-6">
        <div className="banner_image_2">
          <div className="image_wrap_1">
            <div className="layer" data-depth="0.1">
              <img src="assets/images/banner/hero_banner_img_2.png" alt="Collab – Online Learning Platform" />
            </div>
          </div>
          <div className="child_image image_wrap_2">
            <div className="layer" data-depth="0.3">
              <img src="assets/images/banner/hero_banner_img_3.jpg" alt="Collab – Online Learning Platform" />
            </div>
          </div>
          <div className="child_image image_wrap_3">
            <div className="layer" data-depth="0.2">
              <img src="assets/images/banner/hero_banner_img_4.jpg" alt="Collab – Online Learning Platform" />
            </div>
          </div>
          <div className="child_image image_wrap_4">
            <div className="layer" data-depth="0.4">
              <img src="assets/images/banner/hero_banner_img_5.jpg" alt="Collab – Online Learning Platform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
    </>
  );
};

export default HeroSection;

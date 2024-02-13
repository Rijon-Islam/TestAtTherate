import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from './Pages/HeaderBottom';


const BannerSection = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/banner`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, []);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;
        const buttonOneText = event.target.buttonOneText.value;
        const buttonOneLink = event.target.buttonOneLink.value;
        const buttonTwoLink = event.target.buttonTwoLink.value;


        const bannerSection = {
            bannerHeading,
            bannerDetails,
            bannerImage,
            buttonOneText,
            buttonOneLink,
            buttonTwoLink,

        };

        const url = `http://localhost:5000/add-banner`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix vh-100" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2 className='mb-5'>Update Banner</h2>

                                {
                                    banner.length === 1 &&
                                    <>
                                        {
                                            banner.map(c =>
                                                banner.map(c =>
                                                    <Link className='th-btn' to={`/banner/${c._id}`}> Edit Banner Section</Link>)
                                            )
                                        }
                                    </>
                                }
                                {
                                    banner.length === 0 &&

                                    <form class="contact-form " onSubmit={handleBannerSection}>
                                        <div class="row">
                                            <div className="col-lg-12 col-md-12 mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerHeading" placeholder="Banner Heading" required />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-12 col-md-12  mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="buttonTwoLink" placeholder="Banner Heading Two" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12  mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerDetails" placeholder="Banner Text" required />
                                               
                                               
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12  mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="bannerImage" placeholder="Banner Image" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12  mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="buttonOneText" placeholder="Button Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12  mb-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="buttonOneLink" placeholder="Button URL" required />
                                                </div>
                                            </div>
                                            
                                            <div class="btn_wrap p-0">
                                                <button class="btn btn_dark px-4 py-3 " data-animation="fadeInRight" data-delay=".8s">Add Banner</button>
                                            </div>
       

                                        </div>

                                    </form>
                                }



                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default BannerSection;
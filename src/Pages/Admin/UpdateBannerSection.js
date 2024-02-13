import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateBannerSection = () => {

    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerText = event.target.bannerText.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;
        const bannerbuttonText = event.target.bannerbuttonText.value;
        const bannerbuttonLink = event.target.bannerbuttonLink.value;

        const updateBanner = {
            bannerHeading,
            bannerText,
            bannerDetails,
            bannerImage,
            bannerbuttonText,
            bannerbuttonLink,

        };

        const url = `http://localhost:5000/update-banner/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateBanner),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };

    return (

        <>
            
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container mb-5">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2> Update Banner</h2>


                                <form onSubmit={handleBannerSection} className="form-inner-con wow slideInLeft mb-5" id="contactpage" method="POST">
                                    

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerHeading" defaultValue={banner.bannerHeading} placeholder="Banner Heading" required style={{ color: 'black' }} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerText" defaultValue={banner.bannerText} placeholder="Banner Text" required style={{ color: 'black' }} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerDetails" defaultValue={banner.bannerDetails} placeholder="Banner Details" required style={{ color: 'black' }} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerImage" defaultValue={banner.bannerImage} placeholder="Banner Image" required style={{ color: 'black' }} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerbuttonText" defaultValue={banner.bannerbuttonText} placeholder="Button Text" required style={{ color: 'black' }} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <input type="text" name="bannerbuttonLink" defaultValue={banner.bannerbuttonLink} placeholder="Button URL" required style={{ color: 'black' }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button   className="contact-btn">Update Banner</button>
                                        </div>
                                    </div>
                                </form>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default UpdateBannerSection;
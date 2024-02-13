import React from 'react';

const ContactSection = () => {
    return (
        <>

<section>
  <div className="form-main-con dots-left-img">
    <div className="container overlay-content">
      <div className="form-title-con text-center wow slideInLeft">
        <h5>Get in touch</h5>
        <h2>Send us a Message</h2>
      </div>
      <form className="form-inner-con wow slideInLeft" id="contactpage" method="POST">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <input type="text" placeholder="Name" name="name" id="name" /> 
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <input type="email" placeholder="Email" name="email" id="email" /> 
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <input type="tel" placeholder="Phone" name="phone" id="phone" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <textarea className="w-100" placeholder="Message" rows={3} name="comments" id="comments" defaultValue={""} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <button type="submit" id="submit" className="contact-btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

            
        </>
    );
};

export default ContactSection;
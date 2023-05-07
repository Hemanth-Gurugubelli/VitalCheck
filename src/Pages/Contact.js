import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import Page from '../components/page';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <Page title="Contact Us" subText="My name is Hemanth" bgClass="contact-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-8">
                    <p>MedCare Hostpital&apos;s is open 24/7 all year round, weekends and holidays inclusive. You can reach us through the following means: </p>
                    <p><strong>Phone</strong><br /><a href="tel:+91 8897754....">+91 889775...</a></p>
<p><a href="tel:8897754...">+9188977542..</a> <strong>(Ambulance Hotline)</strong></p>
<p><strong>Email</strong><br /></p>
<p><a href="mailto:hem.....belli@gmail.com">hem.....belli@gmail.com</a></p>
<p><strong>Physical Address</strong><br />Visakhapatnam, <br />Complex Road,<br />elite enclave</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
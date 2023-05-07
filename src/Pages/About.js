import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import PagesHero from '../components/page';

function About(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="About Us" subText="Thank you my name is Hemanth. My native is Visakhapatnam" bgClass="about-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-10">
                    <p> i completed my graduation in 2023 with specialization of Civil engineering at Raghu Institute of Technology, Visakhapatnam. About my family my Father is an Accountant, my Mother is a homemaker and my brother is Studying B.Tech at Vishnu Institute of Technology. I learned technologies like Python ,HTML, CSS, javascripts,react.js,Nodejs with the help of  CCBP programming and  I have developed so many projects by using these technologies. </p>
<p>Remember that small changes can make a big difference in improving health and well-being. Encourage Sunita Sharma to make gradual changes that she can maintain over time, and seek the advice of a medical professional before making any significant lifestyle changes.</p>

                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;
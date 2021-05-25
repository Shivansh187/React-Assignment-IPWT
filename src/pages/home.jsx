import React from 'react';
import "../css/home.css"
import Typical from 'react-typical'
import Image from '../assets/IoT Png.png'

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg" >
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome to <strong className="brand-name">React-Resume</strong></h1>
                        <div className="wrapper">
                          <h2 className="my-3">
                            I am a <span> </span>
                            <Typical
                              loop={Infinity}
                              wrapper="a"
                              steps={[
                                'Student',1000,
                                'Developer',1000,
                                'Learner',1000,
                                'Enthusiast',1000,
                                'Coder', 1000
                              ]}
                            />
                          </h2>
                        </div>
                      </div>

                      <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={Image} className="img-fluid animated" alt="homeimg"/>
                      </div>
                  </div>  
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;

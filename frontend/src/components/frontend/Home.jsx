import Header from "../common/Header";
import Footer from '../common/Footer';
import AboutSection from "../common/AboutSection";
import ServiceImg from '../../assets/images/construction1.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { useEffect, useState } from "react";
import { apiUrl } from "../common/http";
import LatestServices from "../common/LatestServices";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <div className="section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amiging Constractions</span>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.</p>
                                <div className="mt-4">
                                    <button className="btn btn-primary large">Contact Now</button>
                                    <button className="btn btn-secondary large ms-2">View Projects</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}

                <AboutSection></AboutSection>

                {/* our Services */}

              <LatestServices></LatestServices>

                

                {/* Why Choose us */}
                <div className="section-4 py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Why Choose us</span>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.</p>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon1} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem ipsum dolor</h3>
                                    </div>
                                  
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Incidunt excepturi, aliquid ducimus fuga repellendus dolores accusamus qui in hic odio!</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon2} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem ipsum dolor</h3>
                                    </div>
                                  
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Incidunt excepturi, aliquid ducimus fuga repellendus dolores accusamus qui in hic odio!</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon3} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Lorem ipsum dolor</h3>
                                    </div>
                                  
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Incidunt excepturi, aliquid ducimus fuga repellendus dolores accusamus qui in hic odio!</p>
                                    
                                </div>
                            </div>
                        
                         </div>
                    </div>
                </div>

                {/* our Projects */}

                <div className="section-3 bg-light py-5">
                    <div className="container-fluid">
                        <div className="section-header text-center">
                            <span>Our Projects</span>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.</p>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-img">
                                        <img src={ProjectImg} alt="" className="w-100"/>
                                    </div>

                                    <div className="service-body">
                                         <div className="service-title">
                                            <h3>Dhaka Project</h3>
                                         </div>
                                         <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, cumque.</p>
                                         </div>
                                         <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-img">
                                        <img src={ProjectImg} alt="" className="w-100"/>
                                    </div>

                                    <div className="service-body">
                                         <div className="service-title">
                                            <h3>Mymensingh Project</h3>
                                         </div>
                                         <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, cumque.</p>
                                         </div>
                                         <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-img">
                                        <img src={ProjectImg} alt="" className="w-100"/>
                                    </div>

                                    <div className="service-body">
                                         <div className="service-title">
                                            <h3>Netrokona Project</h3>
                                         </div>
                                         <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, cumque.</p>
                                         </div>
                                         <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-img">
                                        <img src={ProjectImg} alt="" className="w-100"/>
                                    </div>

                                    <div className="service-body">
                                         <div className="service-title">
                                            <h3>Serpur Project</h3>
                                         </div>
                                         <div className="service-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, cumque.</p>
                                         </div>
                                         <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                        <button className="btn btn-primary large">View All Projects</button>
                        </div>
                    </div>
                </div>


               {/* our Blogs */}
                <div className="section-5 py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Blog & News</span>
                            <h2>Article & Blog Posts.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.</p>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                       <img src={BlogImg} alt=""  className="w-100"/>
                                    </div>
                                    <div className="card-body p-4">
                                         <div className="card-title">
                                            <a href="" className="title">Dummy Blog Title</a>
                                         </div>
                                         <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-4">
                               <div className="card shadow border-0">
                                    <div className="card-img-top">
                                       <img src={BlogImg} alt=""  className="w-100"/>
                                    </div>
                                    <div className="card-body p-4">
                                         <div className="card-title">
                                            <a href="" className="title">Dummy Blog Title</a>
                                         </div>
                                         <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                       <img src={BlogImg} alt=""  className="w-100"/>
                                    </div>
                                    <div className="card-body p-4">
                                         <div className="card-title">
                                            <a href="" className="title">Dummy Blog Title</a>
                                         </div>
                                         <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                        <div className="text-center pt-5">
                        <button className="btn btn-primary large">View All Blogs</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;
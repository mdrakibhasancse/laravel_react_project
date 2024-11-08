import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import ProjectImg from '../../assets/images/construction2.jpg';

const Projects = () => {
    return (
        <div>
            <Header></Header> 
            <main>
                <Hero preHeading='Quality ,Intergety, Value' heading='Projects' 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.">
                </Hero>
                <div className="section-3 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Our Projects</span>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.</p>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-4">
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
                            <div className="col-md-4">
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

                            <div className="col-md-4">
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
                            <div className="col-md-4">
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
                    </div>
                </div>
               
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Projects;
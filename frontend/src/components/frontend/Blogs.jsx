import Header from '../common/Header';
import Footer from '../common/Footer';
import BlogImg from '../../assets/images/construction3.jpg';
import Hero from '../common/Hero';

const Blogs = () => {
    return (
        <div>
        <Header></Header> 
        <main>
            <Hero preHeading='Quality ,Intergety, Value' heading='Blogs' 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.">
            </Hero>
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

                       
                    </div>
                </div>
           
        </main>
        <Footer></Footer>
    </div>
    );
};

export default Blogs;
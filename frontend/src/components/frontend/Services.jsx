import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import ServiceHeroSection from "../common/ServiceHeroSection";

const Services = () => {

    const [services, setServices] = useState([]);

    const fetchAllServices = async () => {
        const res = await fetch(apiUrl+"all-services",{
            'method'  : 'GET',
        });
        const result = await res.json();
        setServices(result.data);
    }


    useEffect(() => {
        fetchAllServices()
    }, [])

    return (
        <div>
            <Header></Header> 
            <main>
                <Hero preHeading='Quality ,Intergety, Value' heading='Services' 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Totam architecto ea deserunt tempora? Quibusdam corporis sed dolorum! Earum, ratione beatae.">
                </Hero>

                {/* our Services */}
                <div className="section-3 bg-light py-5">
                    <div className="container">
                        <ServiceHeroSection></ServiceHeroSection>
                        <div className="row py-3">

                            { services && services.map((service, index) => {
                                return (
                                <div className="col-md-4" key={index}>
                                    <div className="item">
                                        <div className="service-img">
                                        <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="" className="w-100"/>
                                        </div>

                                        <div className="service-body">
                                            <div className="service-title">
                                            <h3>{service.title}</h3>
                                            </div>
                                            <div className="service-content">
                                            <p>{service.excerpt}</p>
                                            </div>
                                            <a href="" className="btn btn-primary small">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                           
                         </div>

                         
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Services;
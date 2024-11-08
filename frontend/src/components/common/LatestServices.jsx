import React from 'react';
import { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../common/http";
import ServiceHeroSection from './ServiceHeroSection';
import { Link } from 'react-router-dom';


const LatestServices = () => {

    const [services, setServices] = useState([]);

    const fetchLatestServices = async () => {
        const res = await fetch(apiUrl+"latest-services",{
            'method'  : 'GET',
        });
        const result = await res.json();
        setServices(result.data);
    }


    useEffect(() => {
        fetchLatestServices()
    }, [])

    return (
        <div>
            <div className="section-3 bg-light py-5">
                <div className="container-fluid">
                    <ServiceHeroSection></ServiceHeroSection>
                    <div className="row py-3">
                        { services && services.map((service, index) => {
                            return (
                                <div className="col-md-3" key={index}>
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

                        <div className="text-center pt-4">
                            <Link to="/services" className='btn btn-primary large'>View All Services</Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LatestServices;
import AboutImg from '../../assets/images/about-us.jpg';

const AboutSection = () => {
    return (
        <div>
            <div className="section-2 py-5">
                <div className="container py-3">
                        <div className="row">
                        <div className="col-md-6 mb-2">
                            <img src={AboutImg} alt="" className="w-100"/>
                        </div>
                        <div className="col-md-6">
                            <span>About Us</span>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt eveniet
                                minus illo consectetur<br /> obcaecati molestias ad odit repudiandae sunt!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
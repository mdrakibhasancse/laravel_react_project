

const Hero = ({preHeading, heading, text}) => {
    return (
        <div>
            <div className="hero-section">
                <div className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="text-left">
                            <span>{preHeading}</span>
                            <h1>{heading}</h1>
                            <p dangerouslySetInnerHTML={{__html:text}}></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Hero;
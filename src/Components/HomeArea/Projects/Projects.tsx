import "./Projects.css";
import carousel1 from '../../../Assets/Images/carousel-1.jpg';
import carousel2 from '../../../Assets/Images/carousel-2.jpg';
import carousel3 from '../../../Assets/Images/carousel-3.jpg';
import carousel4 from '../../../Assets/Images/carousel-4.jpg';
import carousel5 from '../../../Assets/Images/carousel-5.jpg';
import carousel6 from '../../../Assets/Images/carousel-6.jpg';
import carousel7 from '../../../Assets/Images/carousel-7.jpg';
import carousel8 from '../../../Assets/Images/carousel-8.jpg';
import carousel9 from '../../../Assets/Images/carousel-9.jpg';

function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="carousel1" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel2} className="d-block w-100" alt="carousel2" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel3} className="d-block w-100" alt="carousel3" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel4} className="d-block w-100" alt="carousel4" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel5} className="d-block w-100" alt="carousel5" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel6} className="d-block w-100" alt="carousel6" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel7} className="d-block w-100" alt="carousel7" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel8} className="d-block w-100" alt="carousel8" />
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel9} className="d-block w-100" alt="carousel9" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Projects;

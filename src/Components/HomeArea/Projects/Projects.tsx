import carousel1 from '../../../Assets/Images/carousel-1.png';
import carousel2 from '../../../Assets/Images/carousel-2.png';
import carousel3 from '../../../Assets/Images/carousel-3.png';
import carousel4 from '../../../Assets/Images/carousel-4.png';
import carousel5 from '../../../Assets/Images/carousel-5.png';
import carousel6 from '../../../Assets/Images/carousel-6.png';
import carousel7 from '../../../Assets/Images/carousel-7.png';
import carousel8 from '../../../Assets/Images/carousel-8.png';
import carousel9 from '../../../Assets/Images/carousel-9.png';
import "./Projects.css";

function Projects(): JSX.Element {
    const images = [
        carousel1, carousel2, carousel3, carousel4, carousel5, 
        carousel6, carousel7, carousel8, carousel9
    ];

    return (
        <div className="Projects">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            key={index}
                        >
                            <img src={image} className="d-block w-100 rounded-circle" alt={`carousel${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Projects;

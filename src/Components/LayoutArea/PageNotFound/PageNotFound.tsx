import "./PageNotFound.css";
import pageNotFoundImage from '../../../Assets/Images/page-not-found.png'

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<img className="PageNotFoundImage" src={pageNotFoundImage}/>
        </div>
    );
}

export default PageNotFound;

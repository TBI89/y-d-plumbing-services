import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import logo from '../../../Assets/Images/y-d-logo.png';
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <div className="SubHeaderContainer">
                <img src={logo} />
                <h1>ירון דוד שירותי ביוב</h1>
                <h2>מגוון שירותי ביובית ואינסטלציה</h2>
            </div>

            <br />

            <div className="ServiceListContainer">
                <span><DoneOutlineIcon style={{ color: "green" }} /> פתיחת סתימות בלחץ מים</span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> שטיפת קווים</span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> צילומי צנרת</span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> תיקוני צנרת ללא הרס </span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> פירוק בטון ושורשים בצנרת</span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> חידוש ואיטום בריכות ביוב</span>
                <br />
                <span><DoneOutlineIcon style={{ color: "green" }} /> החלפת מכסי ביוב</span>
            </div>
            <br />

            <Contact />
            <Projects />
        </div>
    );
}

export default Home;

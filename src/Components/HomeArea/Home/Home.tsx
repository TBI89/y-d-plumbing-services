import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>מגוון שירותי ביובית ואינסטלציה</h2>
            <br />

            <div className="ServiceListContainer">
                <span><DoneOutlineIcon /> חידוש ואיטום בריכות ביוב</span>
                <br />
                <span><DoneOutlineIcon /> החלפת מכסי ביוב</span>
                <br />
                <span><DoneOutlineIcon /> פירוק בטון ושורשים בצנרת</span>
                <br />
                <span><DoneOutlineIcon /> צילומי צנרת</span>
                <br />
                <span><DoneOutlineIcon /> פתיחת סתימות בלחץ מים</span>
                <br />
                <span><DoneOutlineIcon /> שטיפת קווים</span>
            </div>
            <br />

            <Contact />
            <Projects />
        </div>
    );
}

export default Home;

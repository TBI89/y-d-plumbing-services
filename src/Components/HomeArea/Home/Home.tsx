import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>מגוון שירותי ביובית ואינסטלציה</h2>
            <br />

            <div className="ServiceListContainer">
                <li>חידוש ואיטום בריכות ביוב</li>
                <li>החלפת מכסי ביוב</li>
                <li>פירוק בטון ושורשים בצנרת</li>
                <li>צילומי צנרת</li>
                <li>פתיחת סתימות בלחץ מים</li>
                <li>שטיפת קווים</li>
            </div>
            <br />

            <Contact />
            <Projects />
        </div>
    );
}

export default Home;

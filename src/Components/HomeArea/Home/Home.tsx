import Contact from "../Contact/Contact";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div dir="rtl" className="Home">
            <h2>כותרת משנה ורשימת שירותים שאתה מספק</h2>
            <br />
            <li>שירות גנרי 1</li>
            <li>שירות גנרי 2</li>
            <li>שירות גנרי 3</li>
            <li>שירות גנרי 4</li>
            <li>שירות גנרי 5</li>

            <Contact />
        </div>
    );
}

export default Home;

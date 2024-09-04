import "./Header.css";
import logo from '../../../Assets/Images/Untitled-design.png';

function Header(): JSX.Element {
    return (
        <div className="Header">
            <img src={logo}/>
			<h1>ירון דוד שירותי ביוב</h1>
        </div>
    );
}

export default Header;

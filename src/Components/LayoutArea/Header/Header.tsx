import "./Header.css";
import logo from '../../../Assets/Images/y-d-logo.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="CallToActionContainer">
                <PhoneInTalkIcon className="HeaderPhoneIcon"/>
                <span>התקשרו עכשיו: 054-4967444</span>
            </div>
            <br /><br />
            <img src={logo} />
            <h1>ירון דוד שירותי ביוב</h1>
        </div>
    );
}

export default Header;

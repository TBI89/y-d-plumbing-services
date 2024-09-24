import "./Header.css";
import logo from '../../../Assets/Images/y-d-logo.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="CallToActionContainer">
                <span>התקשרו עכשיו: 055-49467444</span>
                <PhoneInTalkIcon className="HeaderPhoneIcon"/>
            </div>
            <br/><br/>
            <img src={logo} />
            <h1>ירון דוד שירותי ביוב</h1>
        </div>
    );
}

export default Header;

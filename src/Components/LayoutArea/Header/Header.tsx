import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="CallToActionContainer">
                <PhoneInTalkIcon className="HeaderPhoneIcon"/>
                <span>התקשרו עכשיו: 054-9467444</span>
            </div>
        </div>
    );
}

export default Header;

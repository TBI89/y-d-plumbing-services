import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import "./Header.css";

function Header(): JSX.Element {

    const phoneNumber = '+972549467444';

    return (
        <div className="Header">
            <div className="CallToActionContainer">
                <a href={`tel:${phoneNumber}`}>
                    <PhoneInTalkIcon className="HeaderPhoneIcon" />
                </a>
                <br />
                <span>התקשרו עכשיו!!! 054-9467444</span>
            </div>
        </div>
    );
}

export default Header;

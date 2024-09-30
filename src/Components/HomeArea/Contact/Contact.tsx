import "./Contact.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact(): JSX.Element {

    const phoneNumber = '+972549467444'
    const message = 'שלום, אני מעוניין בשירותי ביובית'

    return (
        <div className="Contact">
            <div className="iconRow">
                <div className="iconContainer">
                    <a href={`https://wa.me/${phoneNumber}?text=${message}`}
                        target="_blank" rel="noreferrer">
                        <WhatsAppIcon style={{fontSize: "55px"}} className="icon" />
                    </a>
                    <br />
                    <span>שלחו הודעה</span>
                </div>

                <div className="iconContainer">
                    <a href={`tel:${phoneNumber}`}>
                        <PhoneIcon style={{fontSize: "55px"}} className="icon" />
                    </a>
                    <br />
                    <span>התקשרו עכשיו</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;

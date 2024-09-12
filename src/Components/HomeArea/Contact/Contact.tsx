import "./Contact.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact(): JSX.Element {

    const phoneNumber = '+972549467444'
    const message = 'שלום הגעתם לירון שירותי ביוב'

    return (
        <div className="Contact">

            <div className="whatsAppContainer">
                <a href={`https://wa.me/${phoneNumber}?text=${message}`}
                    target="_blank" rel="noreferrer">
                    <WhatsAppIcon style={{ fontSize: '60px' }} />
                </a>
            </div>

            <div className="phoneContainer">
                <a href={`tel:${phoneNumber}`}>
                    <PhoneIcon style={{ fontSize: '60px' }} />
                </a>
            </div>

        </div>
    );
}

export default Contact;

import "./Contact.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact(): JSX.Element {

    const phoneNumber = '+972549467444'
    const message = 'שלום הגעתם לירון שירותי ביוב'
    return (
        <div className="Contact">
            <a href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank" rel="noreferrer">
                <WhatsAppIcon style={{ fontSize: '60px' }} />
            </a>

        </div>
    );
}

export default Contact;

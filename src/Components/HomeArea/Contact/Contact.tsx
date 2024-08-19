import "./Contact.css";

function Contact(): JSX.Element {

    const phoneNumber = '+972549467444'
    const message = 'שלום, אשמח לקבל פרטים נוספים בנוגע ל...'
    return (
        <div className="Contact">
            <p>ליצירת קשר</p>
            <a href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank" rel="noreferrer">054-9467444</a>
        </div>
    );
}

export default Contact;

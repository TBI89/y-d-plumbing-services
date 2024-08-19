import "./Footer.css";

function Footer(): JSX.Element {

    const yearCounter = new Date().getFullYear();
    return (
        <div className="Footer">
			<p>כל הזכויות שמורות לירון דוד שירותי אינסטלציה ©️ {yearCounter}</p>
        </div>
    );
}

export default Footer;

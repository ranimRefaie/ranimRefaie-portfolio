import "./ContactInfo.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInfo = ({ iconUrl, text }) => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div data-aos="zoom-in-right" className="contact-details-card">
      <div className="icon">{iconUrl}</div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo;

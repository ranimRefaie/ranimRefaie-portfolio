import ContactInfo from "../ContactInfo/ContactInfo";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import TitleSection from "../TitleSection/TitleSection";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <section id="contact" className="content-container">
      <TitleSection title="Contact Me" />

      <div className="contact-content">
        <div className="contact-left" style={{ flex: 1 }}>
          <p data-aos="zoom-in-up">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="">
            <ContactInfo iconUrl={<MdPhoneInTalk />} text="+9638 1614 073" />
            <ContactInfo
              iconUrl={<MdOutlineEmail />}
              text="ranemalre@gmail.com"
            />
            <ContactInfo iconUrl={<IoLocationSharp />} text="Syria-Damascuse" />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

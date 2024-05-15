import "./ContactForm.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e0e7b71-d169-4783-939d-9fb8d3c48885");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={onSubmit}>
        <div className="name-container">
          <input
            data-aos="fade-up"
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input
            data-aos="fade-up"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          data-aos="fade-up"
          type="text"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          data-aos="fade-up"
          type="text"
          name="message"
          rows="3"
          placeholder="Message"
          required
        />
        <button data-aos="fade-up">Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;

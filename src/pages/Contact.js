import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import FloatingInput from "../components/InputFloatingLabel";

export default function Contact() {

  return (
    <div className="contact_container">
      <div className="contact_banner">
        <h1 className="banner-title">contact us</h1>
      </div>
      <div className="contact">
        <div className="contact_left">
          <div className="contact_left-textbox">
            <h4>send a message</h4>
            <h2>
              get in <span>touch</span>
            </h2>
            <p>We will respond to your message as soon as possible.</p>
          </div>
          <form className="contact_form">
            <div className="contact_form-row">
              {" "}
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                //   value={inputValue}
                //   onChange={(e) => setInputValue(e.target.value)}
              >
                Name{" "}
              </FloatingInput>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="email"
                //   value={inputValue}
                //   onChange={(e) => setInputValue(e.target.value)}
              >
                Email{" "}
              </FloatingInput>{" "}
            </div>
            <div className="contact_form-row">
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="Phone"
                //   value={inputValue}
                //   onChange={(e) => setInputValue(e.target.value)}
              >
                Phone{" "}
              </FloatingInput>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="subject"
                //   value={inputValue}
                //   onChange={(e) => setInputValue(e.target.value)}
              >
                Subject{" "}
              </FloatingInput>
            </div>

            <textarea placeholder="Write your message here"></textarea>
            <button className="secondary-btn" style={{ width: "25%" }}>
              send message
            </button>
          </form>
        </div>
        <div className="contact_right">
          <div className="contact_right-textbox">
            <h3>contact links</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Curabitur convallis, diam a egestas iaculis, neque lorem interdum
              felis, in viverra lacus tortor in leo.
            </p>
          </div>
          <div className="contact_links">
            <div className="contact_link phone">
              <span>
                <FontAwesomeIcon icon={faPhone} className="contact_icon" />
              </span>{" "}
              <p>09046462412</p>
            </div>
            <div className="contact_link phone">
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="contact_icon" />
              </span>{" "}
              <p>shb.rezvani@gmail.com</p>
            </div>{" "}
            <div className="contact_link phone">
              <span>
                <FontAwesomeIcon icon={faWhatsapp} className="contact_icon" />
              </span>{" "}
              <p>WhatsApp</p>
            </div>{" "}
            <div className="contact_link phone">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contact_icon"
                />
              </span>{" "}
              <p>Shipping from Karaj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

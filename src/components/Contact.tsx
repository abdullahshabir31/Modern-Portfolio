import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Connect */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="www.linkedin.com/in/abdullah-shabir-a8646a2b9"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Abdullah Shabir
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdullahshabir31"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — Abdullah Shabir
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/itx_abdullah_shabir?igsh=MWNjYTZ6ZW1iZmZkaw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Instagram — Abdullah Shabir
              </a>
            </p>

            <h4>Education</h4>
            <p>Bachelor of Science in Computer Science</p>
            <p>University of South Asia — 2022–2026</p>
          </div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/abdullahshabir31"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-shabir-a8646a2b9"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/itx_abdullah_shabir?igsh=MWNjYTZ6ZW1iZmZkaw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abdullah Shabir</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

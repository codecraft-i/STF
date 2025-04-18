import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section" id="ContactSection">
      <h2 className="title">Get in touch</h2>

      <div className="contact-container">
        {/* Map */}
        <div className="map-box">
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019797542563!2d-122.4221096846804!3d37.80366367975378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f6d63718ff%3A0xb64e9f99cf2c17e2!2sFrancisco%20Park!5e0!3m2!1sen!2sus!4v1682952481786!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Head Office */}
        <div className="office">
          <h3>Head office</h3>
          <p>Bay St & Larkin St, San Francisco, CA 94109, United States</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:3052409671">305-240-9671</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@company.com">info@company.com</a>
          </p>
        </div>

        {/* Dubai Office */}
        <div className="office">
          <h3>Dubai office</h3>
          <p>Burj Park, Downtown Dubai, United Arab Emirates</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:1102203400">110-220-3400</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@company.com">info@company.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
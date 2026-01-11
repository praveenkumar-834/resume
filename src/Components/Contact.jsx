import React from "react";
import "./Contact.css"
import { Element } from "react-scroll";

function Contact() {
  return (
<Element name="contact">
<section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>
        Feel free to reach out to me for collaboration, project discussions,
        or job opportunities.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> kumar.praveen0834@gmail.com</p>
        <p><strong>Phone:</strong> +91 86818 97810</p>
        <p><strong>Location:</strong> India</p>
      </div>
    </section>
    </Element>
  );
}

export default Contact;

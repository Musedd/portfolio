import React from "react";
import "./Contact.scss";
import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons";

const Contact = () => {
  return (
    <>
  

      <div className="contact-left-col">
        <h1 className="title">Contact me</h1>
        <p>
          <MailIcon /> <span>edvmussa@gmail.com</span>
        </p>
        <div className="social-icons">
          <GithubIcon />
          <LinkedInIcon />
        </div>
      </div>

      <div className="contact-right-col">
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={6} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

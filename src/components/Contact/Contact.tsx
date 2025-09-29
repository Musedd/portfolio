import React, { useRef } from "react";
import "./Contact.scss";
import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons";

const Contact = () => {
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
  const [result, setResult] = React.useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully!");
      formRef.current?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact-left-col">
        <h1 className="title">Contact me</h1>
        <p>
          <MailIcon /> <span>edvmussa@gmail.com</span>
        </p>
        <div className="social-icons">
          <a target="_blank" href="https://github.com/Musedd">
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/78893123-50319724b"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div className="contact-right-col">
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </>
  );
};

export default Contact;

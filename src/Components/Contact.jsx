import React from 'react';
import './styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2 className="h2">Contact</h2>
      <div className="contact-container">
        <form
          className="form"
          action="https://formsubmit.co/hotevof143@get2israel.com"
          method="POST"
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              className="textarea"
              placeholder="Write your message here!"
              required
            />
          </label>
          <div className="btn-container">
            <button className="btn send" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

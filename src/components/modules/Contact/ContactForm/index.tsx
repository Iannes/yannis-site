import * as React from 'react';

const ContactForm = () => {
  return (
    <form name="contact-form" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="relative mb-4">
        {/* <label htmlFor="name">Your Name:</label> <br /> */}
        <input type="text" name="name" id="name" className="input" placeholder="Full name*" />
      </div>
      <div className="relative mb-4">
        {/* <label htmlFor="email">Your Email:</label> <br /> */}
        <input type="email" name="email" id="email" className="input" placeholder="Email*" />
      </div>
      <div className="relative mb-4">
        {/* <label htmlFor="message">Message:</label> <br /> */}
        <textarea name="message" id="message" className="input" placeholder="Message*"></textarea>
      </div>
      <div className="text-left">
        <button type="submit" className="button button-secondary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

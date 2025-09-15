import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'

const Contact = () => {

  const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Hardcoded key - works in all environments
  formData.append("access_key", "03b3a167-1e88-4d0f-88f6-fa8281e41b58");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error:", result);
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Network error. Please try again later.");
  }
};

    return (
        <div id='contact' className="contact">
          <div className="contact-title">
            <h1>Get in touch with me</h1>
            <div className="contact-title-underline"></div>
          </div>  
          <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Chat</h1>
                <p>If you have any questions or just want to say hi, feel free to drop me a message!</p>
                <div className="contact-details">
                <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>cyfernikolaisupleo@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="" /><p>+639086950606</p>  
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Quezon City Philippines</p> 
                </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required/>
            <label htmlFor="">Write your message</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Submit</button>
            </form>
          </div>
        </div>
    );
};

export default Contact;
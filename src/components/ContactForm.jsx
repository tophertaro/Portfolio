import React, { useState, useRef } from "react";

import emailjs from 'emailjs-com'

function ContactForm() {

  const form = useRef();

  const [messageStatus, setMessageStatus] = useState(""); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utiliser emailjs pour envoyer le formulaire
    emailjs.sendForm('service_qq8vd9k', 'template_adpde1d', form.current,'HlGq6B3FC2GdyM1Od',)
      .then((result) => {
        console.log(result.text);
        setMessageStatus("Message sent successfully !");
      }, (error) => {
        console.log(error.text);
        setMessageStatus("Error while sending the message.");
      });

    // Réinitialiser le formulaire après envoi
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact me</h2>
      <form ref={form}onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>

      {/* Afficher le message de succès ou d'erreur */}
      {messageStatus && <p className="message-status">{messageStatus}</p>}
    </div>
  );
}

export default ContactForm;

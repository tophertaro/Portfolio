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
        setMessageStatus("Message envoyé avec succès !");
      }, (error) => {
        console.log(error.text);
        setMessageStatus("Erreur lors de l'envoi du message.");
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
      <h2>Contactez-moi</h2>
      <form ref={form}onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>

      {/* Afficher le message de succès ou d'erreur */}
      {messageStatus && <p className="message-status">{messageStatus}</p>}
    </div>
  );
}

export default ContactForm;

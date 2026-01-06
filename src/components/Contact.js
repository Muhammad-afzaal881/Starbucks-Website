import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    
    alert('Reservation successfully');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <Navbar></Navbar>
    
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@yourcompany.com</p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <iframe
        className="map"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.90340953446!2d74.3387486!3d31.5203698"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    </main>
  );
};

export default ContactPage;

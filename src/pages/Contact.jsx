// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ ad: '', email: '', mesaj: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert("Mesajınız göndərildi! (Backend bağlantısı sonrakı mərhələdə olacaq)");
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Əlaqə</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="ad"
          placeholder="Adınız"
          value={formData.ad}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ünvanınız"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mesaj"
          placeholder="Mesajınız"
          value={formData.mesaj}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ backgroundColor: '#00264d', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
          Göndər
        </button>
      </form>
    </div>
  );
}

export default Contact;

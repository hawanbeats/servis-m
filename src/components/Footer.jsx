// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#00264d', color: 'white', textAlign: 'center', padding: '20px' }}>
      <p>© {new Date().getFullYear()} SERVİS-M | Bütün hüquqlar qorunur.</p>
    </footer>
  );
}

export default Footer;

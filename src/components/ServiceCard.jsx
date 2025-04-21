// src/components/ServiceCard.jsx
import React from 'react';

function ServiceCard({ title }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ fontSize: '18px', color: '#00264d' }}>{title}</h3>
    </div>
  );
}

export default ServiceCard;

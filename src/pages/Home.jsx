// src/pages/Home.jsx
import React from 'react';
import logo from '../assets/logo.jpg';

function Home() {
  return (
    <div style={{ padding: '30px' }}>
      <img src={logo} alt="Servis-M Logo" style={{ maxWidth: '300px' }} />
      <h1>Servis-M şirkətinə xoş gəlmisiniz!</h1>
      <p>2007-ci ildən bəri sənayə və neft avadanlıqlarının təmiri sahəsində peşəkar xidmət göstəririk.</p>

      <section>
        <h2>Missiyamız</h2>
        <p>Müştərilərimizə keyfiyyətli, dəqiq və innovativ həllər təqdim etmək.</p>
        <h2>Vizyonumuz</h2>
        <p>Neft avadanlıqlarının təmiri və istehsalında regional lider olmaq.</p>
      </section>
    </div>
  );
}

export default Home;

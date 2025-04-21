// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // istəsən png/svg ilə əvəz edə bilərik

function Navbar() {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="Servis-M Logo" style={styles.logo} />
      <ul style={styles.links}>
        <li><Link to="/">Əsas</Link></li>
        <li><Link to="/haqqimizda">Haqqımızda</Link></li>
        <li><Link to="/xidmetler">Xidmətlər</Link></li>
        <li><Link to="/elaqe">Əlaqə</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '10px 20px', backgroundColor: '#00264d', color: 'white'
  },
  logo: {
    height: '50px'
  },
  links: {
    listStyle: 'none', display: 'flex', gap: '20px'
  }
};

export default Navbar;

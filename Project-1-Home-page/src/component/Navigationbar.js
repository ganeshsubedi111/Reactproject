import React, { useState, useEffect } from 'react';
import '../Css/App.css';
import '@fortawesome/fontawesome-free/css/all.css';
function Navigationbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const menuIcon = document.querySelector('.menu-icon');
      const menu = document.querySelector('nav ul');
  
      menuIcon.addEventListener('click', () => {
        setIsMenuOpen(!isMenuOpen);
      });
  
      return () => {
        menuIcon.removeEventListener('click', () => {
          setIsMenuOpen(!isMenuOpen);
        });
      };
    }, [isMenuOpen]);
  
    return (
      <div>
        <nav>
          <div className="logo">
            <img src="/images/logos.png" alt="" />
          </div>
          <div className="menu-icon">
            <i className="fa fa-bars"></i>
          </div>
          <ul className={isMenuOpen ? 'show-menu' : ''}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="btnn">
          <button>Login</button>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigationbar;
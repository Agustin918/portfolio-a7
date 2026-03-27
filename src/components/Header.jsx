import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determinar si debemos ocultar o mostrar el header (solo si el menú no está abierto)
      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false); // Bajando -> ocultar
        } else {
          setVisible(true); // Subiendo -> mostrar
        }
      }

      // Determinar si hay scroll para aplicar transparencia/fondo
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${visible ? 'header-visible' : 'header-hidden'} ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>

        {/* Botón Hamburguesa */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={closeMenu}>INICIO</Link></li>
            <li><Link to="/nosotros" onClick={closeMenu}>NOSOTROS</Link></li>
            <li><Link to="/proyectos" onClick={closeMenu}>PROYECTOS</Link></li>
            <li><Link to="/contactanos" onClick={closeMenu}>CONTACTANOS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src="/logo.png" alt="Logo" className="footer-logo-img" />
                </div>
                <div className="footer-socials">
                    <a href="https://instagram.com/a7arq" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="mailto:asietearq@gmail.com">Mail</a>
                    <a href="https://wa.me/5491144228025" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
                <div className="footer-copyright">
                    © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

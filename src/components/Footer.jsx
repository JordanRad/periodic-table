import React from 'react';
const Footer = () => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear()
    return (
        <div className="footer-bg tc mt3">
            <small>&copy; Copyright {currentYear}, Jordan Radushev</small>
        </div>
    );
}

export default Footer;
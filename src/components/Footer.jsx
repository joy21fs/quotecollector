import React from "react";

function Footer() {
  return (
    <section className="white-section" id="footer">
      <div className="container-fluid">
        <i className="footer-icon fab fa-twitter"></i>
        <i className="footer-icon fab fa-facebook-f"></i>
        <i className="footer-icon fab fa-instagram"></i>
        <i className="footer-icon fas fa-envelope"></i>
        <p>© Copyright {new Date().getFullYear()} Joy Yu</p>
      </div>
    </section>
  );
}

export default Footer;

const Footer = () => (
  <footer className="alba-footer">
    <div className="alba-footer__contact">
      <div className="alba-footer__contact-col">
        <span className="alba-footer__contact-label">Visit our sales suite</span>
        <p className="alba-footer__contact-text">68 Union Street,<br />Brighton East VIC 3187</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=68+Union+Street+Brighton+East+VIC+3187"
          target="_blank"
          rel="noopener noreferrer"
          className="alba-footer__contact-cta"
        >
          Get directions
        </a>
      </div>

      <div className="alba-footer__contact-col">
        <span className="alba-footer__contact-label">Opening times</span>
        <p className="alba-footer__contact-text">By appointment only</p>
        <button type="button" className="alba-footer__contact-cta" data-action="register">
          Book an appointment
        </button>
      </div>

      <div className="alba-footer__contact-col">
        <span className="alba-footer__contact-label">Andrew Steele</span>
        <p className="alba-footer__contact-text">
          <a href="tel:0499653690">0499 653 690</a><br />
          <a href="mailto:andrew@dmproperty.com.au">andrew@dmproperty.com.au</a>
        </p>
      </div>
    </div>

    <div className="alba-footer__inner">
      <div className="alba-footer__brand">
        <img src="./assets/alba-wordmark.svg" alt="Alba Parkdale" className="alba-footer__mark-img" />
      </div>

      <div className="alba-footer__credits">
        <span className="alba-footer__label">Development</span>
        <span className="alba-footer__label">Interiors</span>
        <span className="alba-footer__label">Architecture</span>
        <span className="alba-footer__label">Construction</span>
        <a href="https://www.dmproperty.com.au" target="_blank" rel="noopener noreferrer" className="alba-footer__logo-link">
          <img src="./assets/dm-property-white.png" alt="DM Property" className="alba-footer__logo alba-footer__logo--lg" />
        </a>
        <a href="https://designbygolden.com.au" target="_blank" rel="noopener noreferrer" className="alba-footer__logo-link">
          <img src="./assets/golden.svg" alt="Golden" className="alba-footer__logo" />
        </a>
        <a href="https://www.martinoleah.com.au" target="_blank" rel="noopener noreferrer" className="alba-footer__logo-link">
          <img src="./assets/martino-leah.svg" alt="Martino Leah" className="alba-footer__logo" />
        </a>
        <a href="https://www.sawconstructions.com.au" target="_blank" rel="noopener noreferrer" className="alba-footer__logo-link">
          <img src="./assets/saw.svg" alt="SAW Construction" className="alba-footer__logo alba-footer__logo--md" />
        </a>
      </div>

      <div className="alba-footer__legal">
        <span>
          <a href="./privacy-policy.html">Privacy policy</a>
          {"  |  "}
          <a href="./disclaimer.html">Disclaimer</a>
        </span>
        <span>
          <a href="https://www.dmproperty.com.au/" target="_blank" rel="noopener noreferrer">© 2026 DM Property</a>
          {"  |  "}
          <a href="http://ivystreet.com.au/" target="_blank" rel="noopener noreferrer">Site by IvyStreet</a>
        </span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;

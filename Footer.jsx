const Footer = () => (
  <footer className="alba-footer">
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
          <img src="./assets/dm.svg" alt="DM Property" className="alba-footer__logo alba-footer__logo--lg" />
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

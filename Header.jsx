const Header = ({ revealed = false, formOpen = false, onRegisterClick }) => (
  <header className={"alba-header" + (revealed ? " is-revealed" : "")}>
    <a href="#top" className="alba-header__mark" aria-label="Alba Parkdale">
      <img src="./assets/alba-wordmark.svg" alt="Alba" className="alba-header__wordmark" />
    </a>
    {!formOpen && (
      <button type="button" className="alba-header__cta" onClick={onRegisterClick}>
        Register your interest
      </button>
    )}
  </header>
);

window.Header = Header;

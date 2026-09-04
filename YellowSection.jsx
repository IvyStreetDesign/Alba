const YellowSection = () => (
  <section className="alba-yellow">
    <div className="alba-yellow__texture" aria-hidden="true">
      <img src="./assets/yellow-grass-texture.png" alt="" />
    </div>
    <div className="alba-yellow__inner">
      <span className="alba-eyebrow" style={{ color: "var(--alba-walnut-soft)" }}>
        Architectural by design.<br className="alba-mobile-br" /> Natural in expression.
      </span>
      <p className="alba-yellow__statement">
        A sense of calm in every detail, from the movement of light to the softness of texture and the quiet ease of arriving home.
      </p>
    </div>
  </section>
);

window.YellowSection = YellowSection;

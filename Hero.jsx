const Hero = () => (
  <section className="alba-hero" data-screen-label="01 Hero">
    <div className="alba-hero__image" aria-hidden="true">
      <video
        src="./assets/alba.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      />
      <div className="alba-hero__veil" />
    </div>

    <div className="alba-hero__chrome">
      <div className="alba-hero__topline">
        <span className="alba-eyebrow">A collection by DM Property</span>

      </div>

      <div className="alba-hero__mark-row">
        <img src="./assets/alba-wordmark.svg" alt="Alba" className="alba-hero__wordmark" />
      </div>

      <div className="alba-hero__bottom">
        <p className="alba-hero__lede">
          A contemporary collection of residences<br />
          shaped by light, landscape and texture.
        </p>
        <button type="button" className="alba-hero__mobile-cta" data-action="register">
          Register your interest
        </button>
      </div>
    </div>

  </section>
);

window.Hero = Hero;

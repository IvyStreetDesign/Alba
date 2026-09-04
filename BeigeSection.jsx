const moments = [
  {
    id: "residences",
    eyebrow: "Residences",
    title: "Room for every rhythm.",
    body: "Alba’s generous three and four bedroom residences combine private open spaces with flexible layouts, creating homes designed for the changing pace of family life. From slow mornings to busy evenings, there's space to gather, retreat and grow.",
    img: "./assets/lifestyle.jpg",
  },
  {
    id: "architecture",
    eyebrow: "Architecture",
    title: "Composed by contrast.",
    body: "Clean architectural lines, framed openings and textural materiality give Alba a strong, contemporary presence. Inspired by Parkdale’s relaxed Bayside setting, the architecture balances bold structure with warmth, shadow and a focus on landscaping, creating a design language that feels both confident and calm.",
    img: "./assets/parkdale-beach.jpg",
  },
  {
    id: "location",
    eyebrow: "Location",
    title: "Placed for Bayside ease.",
    body: "Set in the charming locale of Parkdale, Alba places everyday amenity and Bayside ease close at hand. Nearby beaches, parks, sporting reserves, golf courses, leading schools and shopping villages are all within easy reach, along with the established coastal neighbourhoods of Mentone, Mordialloc and Beaumaris.",
    img: "./assets/parkdale.jpg",
  },
];

const BeigeSection = () => {
  const [active, setActive] = React.useState(-1);
  const [imgTop, setImgTop] = React.useState(0);
  const refs       = React.useRef([]);
  const sectionRef = React.useRef(null);

  // Crossfade: activate the moment whose centre has passed 92% of viewport height
  React.useEffect(() => {
    let raf = 0;
    const TRIGGER = 0.92;
    const pick = () => {
      raf = 0;
      const trigger = window.innerHeight * TRIGGER;
      let idx = -1;
      for (let i = 0; i < refs.current.length; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top + r.height / 2 <= trigger) idx = i;
      }
      setActive(idx);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(pick); };
    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Sticky image top — constant per viewport height, recalculated only on resize.
  // Keeping this out of the scroll handler prevents jitter on the sticky element.
  React.useEffect(() => {
    const update = () => {
      if (!sectionRef.current) return;
      if (window.matchMedia('(max-width: 980px)').matches) { setImgTop(0); return; }
      const imgHeight = window.innerHeight - 560; // matches CSS calc(100vh - 560px)
      const navH = 64;
      setImgTop(navH + (window.innerHeight - navH - imgHeight) / 2);
    };
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="alba-beige" id="residences" ref={sectionRef}>
      <div className="alba-beige__inner">
        <div className="alba-beige__grid">
          <div className="alba-beige__col">
            <header className="alba-beige__head">
              <span className="alba-eyebrow">Welcome to Alba Parkdale</span>
              <h2 className="alba-beige__title">A considered expression<br />of bayside living</h2>
              <div className="alba-beige__intro">
                <p>With interiors brought to life by Golden in collaboration with architects Martino Leah, Alba offers calm, grounded townhomes in the bayside neighbourhood of Parkdale.</p>
                <p>Designed for modern family living, each home balances form and function – offering generous spaces, considered finishes and a quiet sense of retreat.</p>
              </div>
              <button type="button" className="alba-beige__register-cta" data-action="register">
                Register your interest
              </button>
            </header>

            {moments.map((m, i) => (
              <article
                key={m.id}
                ref={el => refs.current[i] = el}
                className={"alba-beige__moment" + (i === active ? " is-active" : "")}
              >
                <img src={m.img} alt="" className="alba-beige__moment-img" aria-hidden="true" />
                <div className="alba-beige__moment-num">0{i + 1}</div>
                <span className="alba-eyebrow">{m.eyebrow}</span>
                <h3 className="alba-beige__moment-title">{m.title}</h3>
                <p>{m.body}</p>
                <button type="button" className="alba-beige__moment-register" data-action="register">
                  Register your interest
                </button>
              </article>
            ))}
          </div>

          <div className="alba-beige__sticky" style={{ top: imgTop + 'px' }} aria-hidden="true">
            <div className="alba-beige__stack">
              <img
                src="./assets/internals.png"
                alt=""
                className={"alba-beige__img" + (active === -1 ? " is-active" : "")}
              />
              {moments.map((m, i) => (
                <img
                  key={m.id}
                  src={m.img}
                  alt=""
                  className={"alba-beige__img" + (i === active ? " is-active" : "")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.BeigeSection = BeigeSection;

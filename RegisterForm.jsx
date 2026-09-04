const RegisterField = ({ label, name, type = "text", value, onChange, placeholder, options }) => {
  if (options) {
    return (
      <label className="alba-rf__field">
        <span className="alba-rf__label">{label}</span>
        <select name={name} value={value || ""} onChange={e => onChange(e.target.value)}>
          <option value="" disabled></option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
    );
  }
  return (
    <label className="alba-rf__field">
      <span className="alba-rf__label">{label}</span>
      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

const RegisterForm = ({ open, onOpen, onClose, tabRevealed = true }) => {
  const [data, setData] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (v) => setData(d => ({ ...d, [k]: v }));

  // TODO: wire to a real endpoint (e.g. POST /api/register or a form service like Formspree)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <button
        type="button"
        className={"alba-rf__tab" + (open ? " is-hidden" : " is-revealed")}
        onClick={onOpen}
        aria-label="Open register form"
        aria-expanded={open}
        tabIndex={open || !tabRevealed ? -1 : 0}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="14 6 8 12 14 18"/>
        </svg>
        <span>Register</span>
      </button>

      <aside
        className={"alba-rf" + (open ? " is-open" : "")}
        aria-hidden={!open}
      >
        <div className="alba-rf__inner">
          <header className="alba-rf__head">
            <span className="alba-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
              Register your interest
            </span>
            <button
              type="button"
              className="alba-rf__close"
              onClick={onClose}
              aria-label="Hide register form"
              tabIndex={open ? 0 : -1}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18"/>
                <line x1="6" y1="18" x2="18" y2="6"/>
              </svg>
            </button>
          </header>

          <h2 className="alba-rf__title">
            Be among the first<br />to discover Alba.
          </h2>

          <form className="alba-rf__form" onSubmit={handleSubmit}>
            <div className="alba-rf__row alba-rf__row--two">
              <RegisterField label="First name" name="first_name" value={data.first} onChange={set("first")} />
              <RegisterField label="Last name"  name="last_name"  value={data.last}  onChange={set("last")} />
            </div>
            <RegisterField label="Email" name="email" type="email" value={data.email} onChange={set("email")} />
            <RegisterField label="Phone" name="phone" type="tel"   value={data.phone} onChange={set("phone")} />
            <div className="alba-rf__row alba-rf__row--two">
              <RegisterField label="Postcode"    name="postcode"    value={data.postcode} onChange={set("postcode")} />
              <RegisterField label="Price range" name="price_range" value={data.price}    onChange={set("price")}
                options={["Under $1.2M", "$1.2–$1.4M", "$1.4M+"]} />
            </div>
            <RegisterField label="Product" name="product" value={data.product} onChange={set("product")}
              options={["3 bedroom townhome", "4 bedroom townhome", "Not sure"]} />

            <button type="submit" className="alba-rf__submit">
              {submitted ? "Thank you ✓" : "Submit"}
            </button>
          </form>

          <p className="alba-rf__legal">
            By registering you agree to receive updates from DM Property.
            View our <a href="./privacy-policy.html">privacy policy</a>.
          </p>
        </div>
      </aside>
    </>
  );
};

window.RegisterForm = RegisterForm;

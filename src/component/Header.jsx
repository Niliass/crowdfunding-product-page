import { useState } from "preact/hooks";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header>
      <div className="container">
        <a href="#" className="header__logo">
          <img src="./images/logo.svg" alt="header logo" />
        </a>
        <button
          className={`nav__icon${state ? " active" : ""}`}
          onClick={() => setState(!state)}
        >
          <img
            src={`./images/icon-${state ? "close-menu" : "hamburger"}.svg`}
            alt="nav icon"
          />
        </button>
        <nav className="header__nav">
          <ul className="header__nav__links">
            <li>
              <a href="#" className="header__nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="header__nav__link">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="header__nav__link">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

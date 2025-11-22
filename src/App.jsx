import { useState } from "react";
import DesktopIllustration from "./assets/images/illustration-sign-up-desktop.svg";
import TabletIllustration from "./assets/images/illustration-sign-up-tablet.svg";
import MobileIllustration from "./assets/images/illustration-sign-up-mobile.svg";
import RightIcon from "./assets/images/icon-list.svg";
import "./App.css";

function App() {
  const [isValid, setIsvalid] = useState(true);
  return (
    <div className="main-container">
      <picture className="illustration-image">
        <source media="(min-width: 1024px)" srcSet={DesktopIllustration} />
        <source media="(min-width: 768px)" srcSet={TabletIllustration} />
        <img src={MobileIllustration} />
      </picture>

      <div className="signup-container">
        <h1 className="signup-header">Stay updated!</h1>
        <p className="signup-description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="feature-list">
          <li className="feature-item">
            <img src={RightIcon} alt="" className="right-icon" />
            <span>Product discovery and building what matters</span>
          </li>
          <li className="feature-item">
            <img src={RightIcon} alt="" className="right-icon" />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li className="feature-item">
            <img src={RightIcon} alt="" className="right-icon" />
            <span>And much more!</span>
          </li>
        </ul>

        <form className="form-control">
          <div htmlFor="" className="labels">
            <label htmlFor="input-field" className="email-text">
              Email address
            </label>
            {!isValid && <p className="error">Valid email required!</p>}
          </div>
          <input
            type="email"
            name=""
            id="input-field"
            placeholder="email@company.com"
            className={isValid ? "input-field " : "input-field error-input "}
          />
          <button className="submit-btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

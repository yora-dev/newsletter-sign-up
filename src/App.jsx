import { useState } from "react";
import DesktopIllustration from "./assets/images/illustration-sign-up-desktop.svg";
import TabletIllustration from "./assets/images/illustration-sign-up-tablet.svg";
import MobileIllustration from "./assets/images/illustration-sign-up-mobile.svg";
import "./App.css";

function App() {
  return (
    <>
      <picture className="illustration-image">
        <source media="(min-width: 1024px)" srcSet={DesktopIllustration} />
        <source media="(min-width: 640px)" srcSet={TabletIllustration} />
        <img src={MobileIllustration} />
      </picture>

      <div className="signup-container">
        <h1 className="signup-header">Stay updated!</h1>
        <p className="signup-description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="feature-list">
          <li className="feature-item">
            Product discovery and building what matters
          </li>
          <li className="feature-item">
            Measuring to ensure updates are a success
          </li>
          <li className="feature-item">And much more!</li>
        </ul>

        <form className="form-control">
          <label htmlFor="email-input">Email address</label>
          <input type="email" name="" id="email-input" />
          <button className="submit-btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

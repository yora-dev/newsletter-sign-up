import Success from "./assets/images/icon-success.svg";
import "./App.css";

function SuccessMsg({ email, onDismiss }) {
  return (
    <div className="success-container">
      <img src={Success} alt="" className="success-img" />
      <h1 className="success-header"> Thanks for subscribing!</h1>
      <p className="success-msg">
        A confirmation email has been sent to{" "}
        <span className="email"> {email}. </span> Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button className="dismiss-btn" onClick={onDismiss}>
        Dismiss messages
      </button>
    </div>
  );
}

export default SuccessMsg;

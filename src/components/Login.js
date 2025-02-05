import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingInput from "./InputFloatingLabel";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";

export default function Login({ setProfile }) {
  const [otp, setOtp] = useState("");
  const [login, setLogin] = useState(false);
  // const [closeLogin, setCloseLogin] = useState(false);
  const renderer = ({ minutes, seconds }) => {
    function makeTwoDigits(n) {
      return (n < 10 ? "0" : "") + n;
    }
    // Render a countdown
    return (
      <span>
        {makeTwoDigits(minutes)}:{makeTwoDigits(seconds)}
      </span>
    );
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <p>login</p>
        <FontAwesomeIcon
          className="login-close"
          icon={faXmark}
          onClick={() => setProfile(false)}
        />
      </div>
      {login ? (
        <div className="login-content">
          <p>Please enter the 4-digit code was sent to you.</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={"otp-input"}
            containerStyle={"otp-input-container"}
            renderInput={(props) => <input {...props} />}
          />
          <a href="#">
            <p className="resend-code">
              re-send code up to{" "}
              {
                <Countdown
                  date={Date.now() + 120000}
                  renderer={renderer}
                  zeroPadTime={2}
                ></Countdown>
              }
            </p>
          </a>
          <button className="secondary-btn">log in</button>
        </div>
      ) : (
        <div className="login-content">
          <p>You need to sign in for shopping</p>
          <FloatingInput
            inputClassName="login-input"
            labelClassName="login-label"
            id="name"
          >
            Phone or email address
          </FloatingInput>
          <button className="secondary-btn" onClick={() => setLogin(true)}>
            log in
          </button>
        </div>
      )}
    </div>
  );
}

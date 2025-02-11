import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingInput from "./InputFloatingLabel";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import Box from "@mui/material/Box";

export default function Register({
  toggleDrawer,
  setRegisterDrawer,
  setIsRegistered,
}) {
  const [otp, setOtp] = useState("");
  const [register, setRegister] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log("REGISTER");

  function handleRegister(event) {
    toggleDrawer()(event);
    setIsRegistered(true);
  }

  //   const handleLogin = async () => {
  //     console.log("Input Value:", inputValue);

  //     const data = {
  //       phone_number: inputValue,
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://django-back.liara.run/accounts/login-otp/",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       );

  //       const result = await response.json();
  //       console.log("Response:", result);

  //       if (response.ok) {
  //         setLogin(true);
  //       } else {
  //         console.error("Error:", result);
  //         alert(result.message || "خطایی رخ داد!");
  //       }
  //     } catch (error) {
  //       console.error("Request failed:", error);
  //       alert("مشکلی در ارتباط با سرور وجود دارد.");
  //     }
  //   };

  //   const sendOtp = async () => {
  //     const dataOtp = {
  //       otp_code: otp,
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://django-back.liara.run/accounts/auth/verify-otp/",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(dataOtp),
  //         }
  //       );

  //       const result = await response.json();
  //       console.log("Response:", result);

  //       // اطمینان از اینکه درخواست موفق بوده
  //       if (response.ok) {
  //         console.log("OTP verification successful!");
  //         setLoginDrawer(false);
  //       } else {
  //         console.error("Error:", result);
  //         alert(result.message || "خطایی رخ داد!");
  //       }

  //       console.log("hellooooooooo");
  //     } catch (error) {
  //       console.error("Request failed:", error);
  //       alert("مشکلی در ارتباط با سرور وجود دارد.");
  //     }
  //   };

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
    <Box sx={{ width: 400 }} role="presentation">
      <div className="login-header">
        <p>sign in</p>
        <FontAwesomeIcon
          className="login-close"
          icon={faXmark}
          onClick={toggleDrawer()}
        />
      </div>
      {register ? (
        <div className="login-content">
          <p>Please enter the 6-digit code was sent to you.</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
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
          <button className="secondary-btn" onClick={handleRegister}>
            sign in
          </button>
        </div>
      ) : (
        <div className="login-content">
          <p>You need to sign in for shopping</p>
          <FloatingInput
            inputClassName="login-input"
            labelClassName="login-label"
            id="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          >
            Phone number
          </FloatingInput>
          <button className="secondary-btn" onClick={() => setRegister(true)}>
            sign in
          </button>
        </div>
      )}
    </Box>
  );
}

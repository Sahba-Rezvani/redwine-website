import React, { useEffect, useState } from "react";
import FloatingInput from "./InputFloatingLabel";

import styles from "./SignUpPage.module.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");

  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // ✅ بعد از تغییر مقدار، ریدایرکت کن
    }
  }, [isLoggedIn]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRegister = () => {
    if (!registerUsername || !registerEmail || !registerPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // چک کردن اینکه آیا ایمیل قبلاً ثبت شده یا نه
    if (localStorage.getItem(`user_${registerEmail}`)) {
      alert("This email is already registered!");
      return;
    }

    // ذخیره اطلاعات کاربر در لوکال استوریج
    const userData = {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    };

    localStorage.setItem(`user_${registerEmail}`, JSON.stringify(userData));

    alert("Registered successfully!");

    // پاک کردن فیلدهای فرم پس از ثبت‌نام
    setRegisterUsername("");
    setRegisterEmail("");
    setRegisterPassword("");

    setSelectedTab(0);
  };

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      alert("Please enter both email and password.");
      return;
    }

    const storedUser = localStorage.getItem(`user_${loginEmail}`);
    if (!storedUser) {
      alert("User not found! Please register first.");
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.password !== loginPassword) {
      alert("Incorrect password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    alert("Login successful!");

    // ✅ ذخیره وضعیت لاگین
    setIsLoggedIn(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
          selectedTabClassName={styles.selectedtab}
        >
          <TabList className={styles.test}>
            <Tab className={styles.tab}>LOGIN</Tab>
            <Tab className={styles.tab}>REGISTER</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.loginContent}>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              >
                Email address *
              </FloatingInput>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              >
                Password *
              </FloatingInput>

              <button onClick={handleLogin}>Log in</button>

              <div className={styles.noAccount}>
                No account yet?{" "}
                <span onClick={() => setSelectedTab(1)}>Create Account</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.loginContent}>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                type="text"
                value={registerUsername}
                onChange={(e) => handleInputChange(e, setRegisterUsername)}
              >
                User Name *
              </FloatingInput>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                type="email"
                value={registerEmail}
                onChange={(e) => handleInputChange(e, setRegisterEmail)}
              >
                Email address *
              </FloatingInput>
              <FloatingInput
                inputClassName="login-input"
                labelClassName="login-label"
                id="name"
                type="password"
                value={registerPassword}
                onChange={(e) => handleInputChange(e, setRegisterPassword)}
              >
                Password *
              </FloatingInput>

              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <button onClick={handleRegister}>REGISTER</button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

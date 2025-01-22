import FloatingInput from "./InputFloatingLabel";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <p>login</p>
        <p>X BTN</p>
      </div>
      <div className="login-content">
        <p>Please enter your email or phone number</p>
        <FloatingInput>phone or email</FloatingInput>
      </div>
    </div>
  );
}

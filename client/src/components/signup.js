import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"; // Import axios for making HTTP requests
import Profile from "./profile";
import ReactDOM from "react-dom";

import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const actionPerformed = async () => {
    const { name, userName, email, password } = formData;

    // Basic validation
    if (
      name.trim() === "" ||
      userName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Plese fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData
      );

      if (response.data.message === "User created successfully") {
        alert("User created successfully");
        try {
          const response2 = await axios.post(
            "http://localhost:5000/api/send-email",
            { email: formData.email }
          );
        } catch (error) {
          toast.error("Error sending in e-mail. ");
        }
        ReactDOM.render(<Profile />, document.getElementById("root"));
      } else if (response.data.message === "User already exists") {
        toast.error("User already exists");
      }
    } catch (error) {
      toast.error("User already exists or Your account might be looked.");
    }
  };

  return (
    <div className="container">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>

      <div className="background-image"></div>

      <div className="login-signup">
        <h5 className="member">
          {" "}
          Already a member? <a href="#"> Log In </a>{" "}
        </h5>
        <h1 className="heading1">Sign up to Dribbble</h1>
        <div>
          <span className="name">Name</span>
          <span className="userName">UserName </span>
        </div>

        <div>
          <input
            type="text"
            className="name-input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            className="userName-input"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="email">Email</div>

        <input
          type="email"
          className="email-input"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <div className="password"> Password </div>
        <input
          type="password"
          className="password-input"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <br />
        <input type="checkbox" className="checkbox-input" required />
        <div className="check-box">
          Creating an account means you're okay with our{" "}
          <a href="">
            {" "}
            Terms <br /> of service, Privacy policy,{" "}
          </a>{" "}
          and our default{" "}
          <a href="">
            {" "}
            Notification <br /> settings.{" "}
          </a>
        </div>

        <button type="button" className="btn" onClick={actionPerformed}>
          {" "}
          Create Account{" "}
        </button>
        <p className="recaptcha-text">
          This site is protected by reCAPTCHA and the Google <br />{" "}
          <a href=""> Privacy Policy </a> and
          <a href=""> Terms of Service </a> apply.
        </p>
        {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
      </div>
    </div>
  );
};

export default Signup;

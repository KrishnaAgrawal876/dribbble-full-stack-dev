import ReactDOM from "react-dom";
import React, { useState } from "react";

import "./profile.css";
import cameraIcon from "../images/camera-icon.png";
import OptionSelector from "./OptionSelector";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = async () => {
    ReactDOM.render(<OptionSelector />, document.getElementById("root"));
  };

  return (
    <div className="profile-pic-upload">
      <label htmlFor="profilePicInput">
        <h1 id="wel-heading"> Welcome! Let's create your profile </h1>
        <p> Let others get to know you better! You can do these later </p>
        <h2> Add an avatar </h2>

        <div className="profile-circle">
          {profilePic ? (
            <img className="profile-pic" src={profilePic} alt="Profile" />
          ) : (
            <img className="camera-icon" src={cameraIcon} alt="Upload" />
          )}
        </div>
        <span className="choose-image-btn">Choose Image</span>
        <input
          type="file"
          id="profilePicInput"
          accept="image/*"
          onChange={handleFileChange}
        />

        <h2> Add your location </h2>
        <input
          type="text"
          className="location-input"
          placeholder="Enter a location"
        />

        <button type="button" className="next-btn" onClick={handleButtonClick}>
          {" "}
          Next{" "}
        </button>
      </label>
    </div>
  );
};

export default Profile;

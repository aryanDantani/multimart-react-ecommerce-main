import React, { useState } from "react";
import "./profilePage.scss";

const ProfileCard = () => {
  const [isDarkMode,] = useState(false);

  return (
    <div className={`profile-card ${isDarkMode ? "dark-theme" : ""}`}>
      <div className="profile-content">
        {/* Left Section */}
        <div className="left-section">
          <img
            src="https://sholaemmanuel.com/wp-content/uploads/2024/06/photo-1570295999919-56ceb5ecca61.jpg"
            alt="Profile"
            className="profile-image"
          />

          <div className="work-history">
            <div className="work-item">
              <h3>Spotify New York</h3>
              <p>123 Madison Street</p>
              <p>New York, NY 10001 78-712-723-23</p>
            </div>

            <div className="work-item">
              <div className="company-header">
                <h3>Metropolitan</h3>
                <span className="badge">Secondary</span>
              </div>
              <p>523 E 34th Street</p>
              <p>New York, NY 10061 56-158-157-85</p>
            </div>

            <div className="work-item">
              <h3>Branding</h3>
              <ul>
                <li>UI/UX</li>
                <li>Web - Design</li>
                <li>Package</li>
                <li>Print + Editorial</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="profile-header">
            <div>
              <h2>Jeremy Rose</h2>
              <p>Product Designer</p>
            </div>

            <div className="rating">
              <span>8.6</span>
              <div className="stars">{"★".repeat(5)}</div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn">✉ Send message</button>
            <button className="btn btn-primary">✓ Contacts</button>
          </div>

          <div className="nav-buttons">
            <button className="btn">⏱ Timeline</button>
            <button className="btn">👤 About</button>
          </div>

          <div className="info-section">
            <h3>Contact Information</h3>
            <div className="info-grid">
              <div>
                <p className="label">Phone</p>
                <p>+1 (25) 262-25562</p>
              </div>
              <div>
                <p className="label">Address</p>
                <p>523 E 12th Street</p>
                <p>New York, NY 10051 78-712-723-23</p>
              </div>
              <div>
                <p className="label">Email</p>
                <p className="link">hello@jeremyrose.com</p>
              </div>
              <div>
                <p className="label">Site</p>
                <p className="link">www.jeremyrose.com</p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Basic Information</h3>
            <div className="info-grid">
              <div>
                <p className="label">Birthday</p>
                <p>June 5, 1992</p>
              </div>
              <div>
                <p className="label">Gender</p>
                <p>Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

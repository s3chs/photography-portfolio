import React from "react";
import "./WelcomeAnim.css";
import { useRef } from "react";

export default function WelcomeAnim() {
  const bgEl = useRef();

  const launchSite = () => {
    bgEl.current.classList.add("active");
  };

  return (
    <div className="container">
      <div ref={bgEl} className="line"></div>
      <div onClick={launchSite} className="eye"></div>
      <div onClick={launchSite} className="circle"></div>
      <p className="enter">enter</p>
      <p className="enter-mirror">enter</p>
    </div>
  );
}

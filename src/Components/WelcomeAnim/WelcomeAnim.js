import React from "react";
import "./WelcomeAnim.css";
import { useRef } from "react";

export default function WelcomeAnim() {
  const bgEl = useRef(null);
  const eyeEl = useRef(null);
  const circleEl = useRef(null);
  const enterEl = useRef(null);
  const enterMirrorEl = useRef(null);

  const launchSite = () => {
    bgEl.current.classList.add("active");
    enterEl.current.classList.add("active");
    enterMirrorEl.current.classList.add("active");
    eyeEl.current.style.cursor = "default";
    circleEl.current.style.cursor = "default";

    setTimeout(() => {
      eyeEl.current.classList.add("active");
      circleEl.current.classList.add("active");
    }, 2000);
  };

  return (
    <div className="container">
      <div ref={bgEl} className="line"></div>
      <div ref={eyeEl} onClick={launchSite} className="eye"></div>
      <div ref={circleEl} onClick={launchSite} className="circle"></div>
      <p ref={enterEl} className="enter">
        enter
      </p>
      <p ref={enterMirrorEl} className="enter-mirror">
        enter
      </p>
    </div>
  );
}

import React from "react";
import "./MainMenu.css";
import { useRef, useEffect } from "react";

export default function MainMenu() {
  const firstEl = useRef();
  const secondEl = useRef();
  const thirdEl = useRef();
  const fourthEl = useRef();

  useEffect(() => {
    setTimeout(() => {
      firstEl.current.classList.add("active");
      secondEl.current.classList.add("active");
      thirdEl.current.classList.add("active");
      fourthEl.current.classList.add("active");
    }, 300);

    return () => {};
  }, []);

  return (
    <div className="main-menu-container">
      <div className="nav-container">
        <p ref={firstEl} className="nav-txt">
          bali
        </p>
      </div>
      <div className="nav-container">
        <p ref={secondEl} className="nav-txt">
          china
        </p>
      </div>
      <div className="nav-container">
        <p ref={thirdEl} className="nav-txt">
          random
        </p>
      </div>
      <div className="nav-container">
        <p ref={fourthEl} className="nav-txt">
          friends
        </p>
      </div>
    </div>
  );
}

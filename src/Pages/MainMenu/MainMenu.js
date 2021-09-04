import React from "react";
import "./MainMenu.css";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const firstEl = useRef();
  const secondEl = useRef();
  const thirdEl = useRef();
  const fourthEl = useRef();
  const imgs = useRef([]);

  useEffect(() => {
    addRef();

    setTimeout(() => {
      firstEl.current?.classList.add("active");
      secondEl.current?.classList.add("active");
      thirdEl.current?.classList.add("active");
      fourthEl.current?.classList.add("active");

      setTimeout(() => {
        imgs.current.forEach((el) => el.classList.add("active"));
      }, 1300);
    }, 300);

    return () => {};
  }, []);

  const addRef = (el) => {
    if (el && !imgs.current.includes(el)) {
      imgs.current.push(el);
    }
  };

  return (
    <div className="main-menu-container">
      <div className="nav-container">
        {/* <Link to="/bali"> */}
        <img
          ref={addRef}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630680872/photography%20portfolio/24140004_s9o3ur.jpg"
          alt=""
        />
        <p ref={firstEl} className="nav-txt">
          bali
        </p>
        {/* </Link> */}
      </div>

      <div className="nav-container">
        {/* <Link to="/china"> */}
        <img
          ref={addRef}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630680877/photography%20portfolio/24140031_t2idyz.jpg"
          alt=""
        />
        <p ref={secondEl} className="nav-txt">
          china
        </p>
        {/* </Link> */}
      </div>
      <div className="nav-container">
        {/* <Link to="/random"> */}
        <img
          ref={addRef}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630681146/photography%20portfolio/30680019_zrzwuq.jpg"
          alt=""
        />
        <p ref={thirdEl} className="nav-txt">
          random
        </p>
        {/* </Link> */}
      </div>
      <div className="nav-container">
        {/* <Link to="/friends"> */}
        <img
          ref={addRef}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630681709/photography%20portfolio/25800018_ngt0jo.jpg"
          alt=""
        />
        <p ref={fourthEl} className="nav-txt">
          friends
        </p>
        {/* </Link> */}
      </div>
    </div>
  );
}

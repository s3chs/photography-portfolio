import React from "react";
import "./MainMenu.css";
import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function MainMenu() {
  const imgs = useRef([]);
  const txts = useRef([]);
  const redirect = useHistory();

  useEffect(() => {
    addImg();
    addTxt();

    txts.current.forEach((el) => el.classList.add("active"));

    setTimeout(() => {
      imgs.current.forEach((el) => el.classList.add("active"));
      txts.current.forEach((el) => el.classList.add("delay-out"));
    }, 1000);

    return () => {};
  }, []);

  const addImg = (el) => {
    if (el && !imgs.current.includes(el)) {
      imgs.current.push(el);
    }
  };

  const addTxt = (el) => {
    if (el && !txts.current.includes(el)) {
      txts.current.push(el);
    }
  };

  const goToGallery = (page) => {
    let url = `/${page}`;
    imgs.current.forEach((el) => el.classList.remove("active"));
    txts.current.forEach((el) => el.classList.add("out"));
    setTimeout(() => {
      redirect.push(url);
    }, 300);
  };

  return (
    <div className="main-menu-container">
      <div className="nav-container" onClick={() => goToGallery("bali")}>
        <img
          ref={addImg}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630849383/photography%20portfolio/bali/24160016_ktqd0u.jpg"
          alt=""
        />

        <p ref={addTxt} className="nav-txt">
          bali
        </p>
      </div>

      <div className="nav-container" onClick={() => goToGallery("china")}>
        <img
          ref={addImg}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630849730/photography%20portfolio/china/24140031_sklief.jpg"
          alt=""
        />

        <p ref={addTxt} className="nav-txt">
          china
        </p>
      </div>
      <div className="nav-container" onClick={() => goToGallery("random")}>
        <img
          ref={addImg}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630849881/photography%20portfolio/random/69250014_zgsstw.jpg"
          alt=""
        />

        <p ref={addTxt} className="nav-txt">
          random
        </p>
      </div>
      <div className="nav-container" onClick={() => goToGallery("friends")}>
        <img
          ref={addImg}
          className="hover-bg"
          src="https://res.cloudinary.com/dncemocxu/image/upload/v1630849687/photography%20portfolio/china/24130014_kqg502.jpg"
          alt=""
        />

        <p ref={addTxt} className="nav-txt">
          friends
        </p>
      </div>
    </div>
  );
}

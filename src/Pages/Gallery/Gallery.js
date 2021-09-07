import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import apiHandler from "../../Api/apiHandler";
import { useHistory } from "react-router-dom";

export default function China() {
  var { id } = useParams();
  const title = useRef();
  const backBtn = useRef();
  const container = useRef();
  const mainContainer = useRef();
  const sliderRef = useRef();
  const redirect = useHistory();

  const [pictures, setPictures] = useState([]);
  const [activateSlider, setActivateSlider] = useState(false);
  const [slider, setSlider] = useState({
    index: null,
    inProgress: false,
  });

  const sliderOut = () => {
    sliderRef.current.classList.add("fade");
    mainContainer.current.classList.add("fade");

    setTimeout(() => {
      setActivateSlider(!activateSlider);
      mainContainer.current.classList.remove("fade");
      title.current.classList.remove("fade");
      backBtn.current.classList.remove("fade");
    }, 300);
  };

  const sliderSwitch = (el, index) => {
    
    title.current.classList.add("fade");
    backBtn.current.classList.add("fade");
    container.current.classList.add("fade");

    setTimeout(() => {
      setActivateSlider(!activateSlider);
      var newState = { ...slider };
      newState.index = index;
      setSlider(newState);

      setTimeout(() => {
        sliderRef.current.classList.remove("fade");
      }, 100);
    }, 300);
  };

  useEffect(() => {
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
    container.current.classList.add("fade");
    displayPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {};
  }, [activateSlider, slider]);

  const prevslide = () => {
    if (slider.index !== 0) {
      setSlider({ index: slider.index, inProgress: true });

      setTimeout(() => {
        setSlider({ index: slider.index - 1, inProgress: false });
      }, 300);
    } else if (slider.index === 0) {
      setSlider({ index: slider.index, inProgress: true });

      setTimeout(() => {
        setSlider({ index: pictures.length - 1, inProgress: false });
      }, 300);
    }
  };

  const nextslide = () => {
    if (slider.index !== pictures.length - 1) {
      setSlider({ index: slider.index, inProgress: true });

      setTimeout(() => {
        setSlider({ index: slider.index + 1, inProgress: false });
      }, 300);
    } else if (slider.index === pictures.length - 1) {
      setSlider({ index: slider.index, inProgress: true });

      setTimeout(() => {
        setSlider({ index: 0, inProgress: false });
      }, 300);
    }
  };

  const displayPage = () => {
    setTimeout(() => {
      title.current.classList.remove("fade");
      backBtn.current.classList.remove("fade");

      setTimeout(() => {
        container.current.classList.remove("fade");
      }, 300);
    }, 500);
  };

  const goBack = () => {
    title.current.classList.add("fade");
    backBtn.current.classList.add("fade");
    container.current.classList.add("fade");

    setTimeout(() => {
      let url = "/home";
      redirect.push(url);
    }, 500);
  };

  return (
    <div ref={mainContainer} className="gallery-container">
      <div
        className={!activateSlider ? "title-container" : "title-container hide"}
      >
        <p ref={title} className="title fade">
          {id}
        </p>
        <p onClick={goBack} ref={backBtn} className="back fade">
          go back
        </p>
      </div>
      <div
        ref={container}
        className={!activateSlider ? "pic-container" : "pic-container hide"}
      >
        {pictures &&
          pictures.map((el, index) => (
            <img
              onClick={() => sliderSwitch(el, index)}
              className="pic"
              key={index}
              src={el.picture}
              alt="pic"
            />
          ))}
      </div>
      {slider.index != null && activateSlider && (
        <div ref={sliderRef} className="slider-container fade">
          <img
            onClick={sliderOut}
            className="close icon"
            src="https://res.cloudinary.com/dncemocxu/image/upload/v1630935047/photography%20portfolio/close-button-png-30221_hfhvac.png"
            alt="close-btn"
          />
          <div className="slider">
            <img
              onClick={prevslide}
              className="prev icon"
              src="https://res.cloudinary.com/dncemocxu/image/upload/v1630917891/photography%20portfolio/PngItem_2402231_zrk8ye.png"
              alt="prev-btn"
            />
            <img
              className={!slider.inProgress ? "img-slider" : "img-slider fade"}
              src={pictures[slider.index].picture}
              alt="slider"
            />
            <img
              onClick={nextslide}
              className="next icon"
              src="https://res.cloudinary.com/dncemocxu/image/upload/v1630917891/photography%20portfolio/PngItem_2402231_zrk8ye.png"
              alt="next-btn"
            />
          </div>
        </div>
      )}
    </div>
  );
}

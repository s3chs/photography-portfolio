import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiHandler from "../../Api/apiHandler";

export default function China() {
  var { id } = useParams();

  const [pictures, setPictures] = useState([]);
  const [activateSlider, setActivateSlider] = useState(false);
  const [slider, setSlider] = useState({
    index: null,
    inProgress: false,
  });

  const sliderOut = () => {
    setActivateSlider(!activateSlider);
  };

  const sliderSwitch = (el, index) => {
    setActivateSlider(!activateSlider);
    var newState = { ...slider };
    newState.index = index;
    setSlider(newState);
  };

  useEffect(() => {
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
  }, []);

  useEffect(() => {
    console.log(
      "le state du slider",
      activateSlider,
      "le state de l'index",
      slider
    );
    return () => {};
  }, [activateSlider, slider.index]);

  const prevslide = () => {
    if (slider.index !== 0) {
      setSlider({ index: slider.index - 1 });
    } else if (slider.index === 0) {
      setSlider({ index: pictures.length - 1 });
    }
  };

  const nextslide = () => {
    if (slider.index !== pictures.length - 1) {
      setSlider({ index: slider.index + 1 });
    } else if (slider.index === pictures.length - 1) {
      setSlider({ index: 0 });
    }
  };

  return (
    <div className="gallery-container">
      <div
        className={!activateSlider ? "title-container" : "title-container hide"}
      >
        <p className="title">{id}</p>
      </div>
      <div className={!activateSlider ? "pic-container" : "pic-container hide"}>
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
        <div className="slider-container">
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
              className="img-slider"
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

import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiHandler from "../../Api/apiHandler";

export default function China() {
  var { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [slider, setSlider] = useState({
    activateSlider: false,
    index: null,
    inProgress: false,
  });

  const activateSlider = (el, index) => {
    var newState = { ...slider };
    newState.activateSlider = !slider.activateSlider;
    newState.index = index;
    setSlider(newState);
  };

  useEffect(() => {
    activateSlider();
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
    return () => {};
  }, []);

  const prevslide = () => {};
  const nextslide = () => {};

  return (
    <div className="gallery-container">
      <div className="title-container">
        <p className="title">{id}</p>
      </div>
      <div className="pic-container">
        {pictures &&
          pictures.map((el, index) => (
            <img
              onClick={() => activateSlider(el, index)}
              className="pic"
              key={index}
              src={el.picture}
              alt="pic"
            />
          ))}
        {slider.index != null && !slider.activateSlider && (
          <div className="slider-container">
            <div className="slider">
              <img
                onClick={prevslide}
                className="prev icon"
                src="https://res.cloudinary.com/dncemocxu/image/upload/v1630917891/photography%20portfolio/PngItem_2402231_zrk8ye.png"
                alt=""
              />
              <img
                className="img-slider"
                src={pictures[slider.index].picture}
                alt=""
              />
              <img
                onClick={nextslide}
                className="next icon"
                src="https://res.cloudinary.com/dncemocxu/image/upload/v1630917891/photography%20portfolio/PngItem_2402231_zrk8ye.png"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

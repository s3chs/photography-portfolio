import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import apiHandler from "../../Api/apiHandler";
import { useEffect, useState } from "react";

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
    console.log(slider);
  };

  useEffect(() => {
    activateSlider();
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));
    // console.log(pictures[slider.index].picture);
    return () => {};
  }, []);

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
                className="img-slider"
                src={pictures[slider.index].picture}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

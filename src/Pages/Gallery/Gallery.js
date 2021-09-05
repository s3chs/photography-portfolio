import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import apiHandler from "../../Api/apiHandler";
import { useEffect, useState } from "react";

export default function China() {
  const [pictures, setPictures] = useState([]);
  const [slider, setSlider] = useState({
    activateSlider: false,
    index: 0,
    inProgress: false,
  });
  var { id } = useParams();

  const activateSlider = (el, index) => {
    var newState = { ...slider };
    newState.slider = !newState.activateSlider;
    newState.index = index;
    setSlider(newState);

    console.log(pictures[slider.index].picture);
  };

  useEffect(() => {
    apiHandler
      .getAll(id)
      .then((apiRes) => {
        setPictures(apiRes.data);
      })
      .catch((apiErr) => console.log(apiErr));

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
        {!slider.activateSlider && (
          <div className="slider-container">
            <div className="slider">
              <img
                className="img-slider"
                src={pictures[slider.index]}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

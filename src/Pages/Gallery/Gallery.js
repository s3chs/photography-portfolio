import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import apiHandler from "../../Api/apiHandler";
import { useEffect, useState } from "react";
// import axios from "axios";

export default function China() {
  const [pictures, setPictures] = useState([]);
  var { id } = useParams();

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
            <img className="pic" key={index} src={el.picture} alt="pic" />
          ))}
      </div>
    </div>
  );
}

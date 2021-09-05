import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";
import apiHandler from "../../Api/apiHandler";
import { useEffect, useState } from "react";
import axios from "axios";

export default function China() {
  const [pictures, setPictures] = useState([]);
  var { id } = useParams();

  const getPictures = () => {
    axios.get(`http://localhost:8080/pictures/${id}`).then((apiRes) => {
      setPictures(apiRes.data);
    });
  };
  
  useEffect(() => {
    // apiHandler
    //   .getAll(id)
    //   .then((apiRes) => {
    //     console.log(apiRes);
    //     setPictures(apiRes.data);
    //   })
    //   .catch((apiErr) => console.log(apiErr));
    getPictures();
    return () => {};
  }, []);

  return <div>{id}</div>;
}

import React from "react";
import "./Gallery.css";
import { useParams } from "react-router";

export default function China() {
  var { id } = useParams();

  return <div>{id}</div>;
}

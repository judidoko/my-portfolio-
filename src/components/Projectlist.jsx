import React from "react";
import { useNavigate } from "react-router-dom";

function Projectlist({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectsList"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <h1>{name}</h1>
    </div>
  );
}

export default Projectlist;

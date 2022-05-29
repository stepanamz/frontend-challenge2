import React, { useState } from "react";
import "./index.css";
import like from "../../like.svg";
import likeHovered from "../../likehovered.svg";

const Cat = ({ onCatClick, ...data }) => {
  const [isActive, setIsActive] = useState(false);
  const handleLikeCat = (clickedElement) => (event) => {
    const favorits = JSON.parse(localStorage.getItem("favorits")) || [];
    if (!favorits.find((item) => item.id === clickedElement.id)) {
      const newData = [...favorits, clickedElement];
      onCatClick(newData);
      localStorage.setItem("favorits", JSON.stringify(newData));
    } else {
      const newData = favorits.filter((item) => item.id !== clickedElement.id);
      onCatClick(newData);
      localStorage.setItem("favorits", JSON.stringify(newData));
    }
  };
  const handleHoverIcon = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  const isFavorite = JSON.parse(localStorage.getItem("favorits") || []).find(
    (item) => item.id === data.id
  );
  return (
    <div className="cat">
      <div className="cat__wrapper">
        <img
          className="cat__like"
          onClick={handleLikeCat(data)}
          onMouseOver={handleHoverIcon}
          onMouseLeave={handleMouseLeave}
          src={isActive || isFavorite ? likeHovered : like}
          alt=""
        />
        <img src={data.url} alt="" />
      </div>
    </div>
  );
};
export default Cat;

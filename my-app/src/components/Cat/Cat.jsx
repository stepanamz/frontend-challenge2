import React from "react";
import "./index.css";
import like from "../../like.svg";

const Cat = ({ onCatClick, ...data }) => {
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

  return (
    <div className="cat">
      <div className="cat__wrapper">
        <img
          className="cat__like"
          onClick={handleLikeCat(data)}
          src={like}
          alt=""
        />
        <img src={data.url} alt="" />
      </div>
    </div>
  );
};
export default Cat;

import React from "react";
import "./Menu-item.style.scss";

const Menuitem = ({ title, imageUrl, size }) => (
  <div className={`each-item ${size}`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default Menuitem;

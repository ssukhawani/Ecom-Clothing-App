import React from 'react'

import './EachColItem.style.scss'

const EachColItem = ({ name,imageUrl,price }) => (
  <div className="each-col-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="image"
    ></div>
    <div className="each-item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
  </div>
);

export default EachColItem;
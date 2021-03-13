import React from 'react'
import "./CollectionItem.Styles.scss"
import EachColItem from '../each-collection-item/EachColItem'

const CollectionItem = ({ title, items }) => (
  <div className="collection-item">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, ind) => ind < 4)
        .map((item) => (
          <EachColItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
);

export default CollectionItem
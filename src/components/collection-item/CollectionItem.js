import React from 'react'
import "./CollectionItem.Styles.scss"
import EachColItem from '../each-collection-item/EachColItem'

const CollectionItem = ({ title, items }) => (
  <div className="collection-item">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((it, ind) => ind < 4)
        .map(({ id, ...otherItemProps }) => (
          <EachColItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionItem
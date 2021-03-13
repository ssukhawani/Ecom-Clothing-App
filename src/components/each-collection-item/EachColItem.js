import React from 'react'

import './EachColItem.style.scss'
import CustomButton from '../custom-button/CustomButton'
import {connect} from 'react-redux'

const EachColItem = ({addItem,item }) => {

  const { name, imageUrl, price } = item
  
  return (
    <div className="each-col-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="each-item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );};

const mapDispatchToProps=(dispatch)=>({
   addItem: val => dispatch({type:"ADD_CARTITEM", payload:val})
})

export default connect(null,mapDispatchToProps)(EachColItem);
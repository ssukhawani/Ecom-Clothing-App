import React from 'react'
import './ShopPage.style.scss'
import SHOP_DATA from './CollectionData'
import CollectionItem from '../../components/collection-item/CollectionItem'


class ShopPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            collection: SHOP_DATA
        }
    }

    render(){
        const {collection}= this.state
        return (
          <div className="shoppage">
            {collection.map(({ id, ...otherCollectionProps }) => (
              <CollectionItem key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
    }
}

export default ShopPage
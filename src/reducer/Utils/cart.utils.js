export const addToCart =(cartItems, cartItemsToAdd)=>{

    const existingCartItem = cartItems.find(cartitem=>
        cartitem.id === cartItemsToAdd.id
    )

    if(existingCartItem){
        return cartItems.map(cartitem=>
        
        cartitem.id === cartItemsToAdd.id? {...cartitem, quantity:cartitem.quantity+1}: cartitem
            
        )
    }

    return [...cartItems,{...cartItemsToAdd,quantity:1}]

}
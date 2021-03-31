import {addToCart} from "./Utils/cart.utils"

const reducer=(state={},action)=>{

    switch (action.type) {
      case "TOGGLE_DROPDOWN": {
        return {
          ...state,
          isDropDown: !state.isDropDown,
        };
      }

      case "ADD_CARTITEM":{
        return {
          ...state,
          cartItems: addToCart(state.cartItems,action.payload)
        };
      }
      default: {
        return state;
      }
    }

}
export default reducer;

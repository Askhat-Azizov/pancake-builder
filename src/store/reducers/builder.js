import * as types from "../actions/types";

const initialState = {
  fruits: null,
  price: 40,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FRUIT:
      return {
        ...state,
        fruits: {
          ...state.fruits,
          [action.fruit]: { 
          ...state.fruits[action.fruit],
          quantity: state.fruits[action.fruit].quantity + 1,
        },
        },
        price: state.price + state.fruits[action.fruit].price,
      };

    case types.REMOVE_FRUIT:
      return {
        ...state,
        fruits: {
          ...state.fruits,
          [action.fruit]: { 
            ...state.fruits[action.fruit],
            quantity: state.fruits[action.fruit].quantity - 1,
          },
        },
        price: state.price -state.fruits[action.fruit].price,
      };

      case types.SET_FRUITS:
      return {
        ...state,
        fruits: action.fruits,
      };

    default:
      return state;
  }
};
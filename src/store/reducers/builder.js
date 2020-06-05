import * as types from "../actions/types";

const initialState = {
  fruits: null,
  price: 40,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.ADD_FRUIT:
      newState.fruits[action.fruit].quantity++;
      newState.price = state.price + state.fruits[action.fruit].price;

      return newState;

    case types.REMOVE_FRUIT:
      newState.fruits[action.fruit].quantity--;
      newState.price = state.price - state.fruits[action.fruit].price;

      return newState;

      case types.SET_FRUITS:
        newState.fruits = action.fruits;
        newState.price = initialState.price;
  
        return newState;

    default:
      return newState;;
  }
};
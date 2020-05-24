import * as actions from "./actions";

const initialState = {
  fruits: {
    banana: 0,
    kiwi: 0,
    chocolate: 0,
    raspberry: 0,
    watermelon: 0,
  },
  price: 40,
};

const PRICES = {
    banana: 5.2,
    kiwi: 8.5,
    chocolate: 10.3,
    raspberry: 5.2,
    watermelon: 8.5,
  };
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FRUIT:
      return {
        ...state,
        fruits: {
          ...state.fruits,
          [action.fruit]: state.fruits[action.fruit] + 1,
        },
        price: state.price + PRICES[action.fruit],
      };

    case actions.REMOVE_FRUIT:
      return {
        ...state,
        fruits: {
          ...state.fruits,
          [action.fruit]: state.fruits[action.fruit] - 1,
        },
        price: state.price - PRICES[action.fruit],
      };

    default:
      return state;
  }
};
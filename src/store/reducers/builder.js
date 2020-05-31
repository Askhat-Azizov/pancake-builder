import * as types from "../actions/types";

const initialState = {
  fruits: {
    banana: { quantity: 0, price: 5.2, label: "Banana"},
    kiwi: { quantity: 0, price: 8.5, label: "Kiwi"},
    chocolate: { quantity: 0, price: 10.3, label: "Chocolate"},
    raspberry: { quantity: 0, price: 5.2, label: "Raspberry"},
    watermelon: { quantity: 0, price: 9.5, label: "Watermelon"},
  },
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

    default:
      return state;
  }
};
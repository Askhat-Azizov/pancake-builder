import { 
    ADD_FRUIT, 
    REMOVE_FRUIT, 
    SET_FRUITS
} from "./types"
import axios from "../../axios"

export const add = (dispatch, fruit) => dispatch({ 
    type: ADD_FRUIT, fruit 
})


export const remove = (dispatch, fruit) => dispatch({ 
    type: REMOVE_FRUIT, fruit 
})

export const set = (dispatch, fruits) => dispatch({ 
    type: SET_FRUITS, fruits
})

export const load = (dispatch) => axios
  .get("/fruits.json")
  .then(({ data }) => set(dispatch, data))
  .catch(() => {});
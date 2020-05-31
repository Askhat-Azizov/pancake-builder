import { ADD_FRUIT, REMOVE_FRUIT } from "./types"

export const add = (dispatch, fruit) => dispatch({ 
    type: ADD_FRUIT, fruit 
})


export const remove = (dispatch, fruit) => dispatch({ 
    type: REMOVE_FRUIT, fruit 
})
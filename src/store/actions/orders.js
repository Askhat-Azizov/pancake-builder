import { SET_ORDERS } from "./types";
import axios from "../../axios";

export const set = (dispatch, orders) =>
  dispatch({
    type: SET_ORDERS, orders
  });

  export const load = (dispatch, token, id) => axios
  .get("/order.json?auth=" + token + '&orderBy="userId"&equalTo="' + id + '"')
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});
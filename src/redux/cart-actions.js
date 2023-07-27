import React from "react";
import commerce from "../lib/Commerce";
import { cartActions } from "redux/CartSlice.js";
import { productActions } from "redux/ProductSlice.js";

export const getData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { data } = await commerce.products.list();
      console.log(data);
      return data;
    };
    try {
      const data = await getData();
      dispatch(productActions.refreshProduct({ data }));
    } catch (e) {
      console.log(e);
    }
  };
};

import * as Api from '../../api/api';
import * as types from '../../constants/actionTypes';

export const fetchProducts = lng => {
  return async dispatch => {
    try {
      const resData = await Api.getCompanies(lng);

      dispatch({type: types.SET_PRODUCTS, products: resData});
    } catch (err) {
      throw err;
    }
  };
};

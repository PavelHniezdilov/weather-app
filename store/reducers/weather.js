import * as types from '../../constants/actionTypes';

const initialState = {
  availableProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products,
        filteredProducts: action.products,
      };
  }
  return state;
};

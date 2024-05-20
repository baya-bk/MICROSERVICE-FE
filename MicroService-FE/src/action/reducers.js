// import {
//   FETCH_ITEMS_SUCCESS,
//   FETCH_ITEMS_FAILURE,
//   EDIT_ITEM_SUCCESS,
//   EDIT_ITEM_FAILURE,
//   DELETE_ITEM_SUCCESS,
//   DELETE_ITEM_FAILURE,
//   ADD_ITEM_SUCCESS,
//   ADD_ITEM_FAILURE,
// } from "./action.js";

// import {
//   ADD_FAILURE,
//   ADD_SUCCESS,
//   DELETE_FAILURE,
//   DELETE_SUCCESS,
//   EDIT_FAILURE,
//   EDIT_SUCCESS,
//   FETCH_FAILURE,
//   FETCH_SUCCESS,
// } from "./action.js";

const initialState = {
  items: [],
  error: null,
};

const createReducer = (resourceName) => {
  const types = {
    FETCH_SUCCESS: `FETCH_${resourceName.toUpperCase()}_SUCCESS`,
    FETCH_FAILURE: `FETCH_${resourceName.toUpperCase()}_FAILURE`,
    EDIT_SUCCESS: `EDIT_${resourceName.toUpperCase()}_SUCCESS`,
    EDIT_FAILURE: `EDIT_${resourceName.toUpperCase()}_FAILURE`,
    DELETE_SUCCESS: `DELETE_${resourceName.toUpperCase()}_SUCCESS`,
    DELETE_FAILURE: `DELETE_${resourceName.toUpperCase()}_FAILURE`,
    ADD_SUCCESS: `ADD_${resourceName.toUpperCase()}_SUCCESS`,
    ADD_FAILURE: `ADD_${resourceName.toUpperCase()}_FAILURE`,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_SUCCESS:
        return {
          ...state,
          items: action.payload,
          error: null,
        };
      case types.FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case types.EDIT_SUCCESS:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload.newItem : item
          ),
        };
      case types.EDIT_FAILURE:
        return {
          ...state,
          error: action.payload.error,
        };
      case types.DELETE_SUCCESS:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      case types.DELETE_FAILURE:
        return {
          ...state,
          error: action.payload.error,
        };
      case types.ADD_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case types.ADD_FAILURE:
        return {
          ...state,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
};

export default createReducer;

import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
} from "./actions";

const initialState = {
  items: [],
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload.newItem : item
        ),
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_ITEM_FAILURE:
    case DELETE_ITEM_FAILURE:
    case ADD_ITEM_FAILURE:
      console.error(action.payload.error);
      return state;
    default:
      return state;
  }
};

export default itemsReducer;

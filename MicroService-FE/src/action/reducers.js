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

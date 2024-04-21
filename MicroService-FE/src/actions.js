import { editItem, deleteItem, addItem } from "./services/api";
import axios from "axios";

export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

export const fetchItemsAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/items");
      dispatch(fetchItemsSuccess(response.data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};

export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const EDIT_ITEM_FAILURE = "EDIT_ITEM_FAILURE";

export const editItemAction = (id, newItem) => {
  return async (dispatch) => {
    try {
      const editedItem = await editItem(id, newItem);
      if (editedItem) {
        dispatch({
          type: EDIT_ITEM_SUCCESS,
          payload: { id, newItem: editedItem },
        });
      } else {
        dispatch({
          type: EDIT_ITEM_FAILURE,
          payload: { id, error: "Failed to edit item" },
        });
      }
    } catch (error) {
      console.error("Error editing item:", error);
      dispatch({
        type: EDIT_ITEM_FAILURE,
        payload: { id, error: error.message },
      });
    }
  };
};

export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItemAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3000/items/${id}`);
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: { id: response.data.id },
      });
    } catch (error) {
      console.error("Error deleting item with id", id, ":", error);
      dispatch({
        type: DELETE_ITEM_FAILURE,
        payload: { id, error: error.message },
      });
    }
  };
};

export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addItemAction = (newItem) => {
  return async (dispatch) => {
    try {
      const addedItem = await addItem(newItem);
      if (addedItem) {
        dispatch({ type: ADD_ITEM_SUCCESS, payload: addedItem });
      } else {
        dispatch({
          type: ADD_ITEM_FAILURE,
          payload: { error: "Failed to add item" },
        });
      }
    } catch (error) {
      console.error("Error adding item:", error);
      dispatch({ type: ADD_ITEM_FAILURE, payload: { error: error.message } });
    }
  };
};

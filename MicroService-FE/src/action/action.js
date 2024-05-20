import createApiService from "../services/apiService";

const apiService = createApiService();

const createActionTypes = (resourceName) => ({
  FETCH_SUCCESS: `FETCH_${resourceName.toUpperCase()}_SUCCESS`,
  FETCH_FAILURE: `FETCH_${resourceName.toUpperCase()}_FAILURE`,
  EDIT_SUCCESS: `EDIT_${resourceName.toUpperCase()}_SUCCESS`,
  EDIT_FAILURE: `EDIT_${resourceName.toUpperCase()}_FAILURE`,
  DELETE_SUCCESS: `DELETE_${resourceName.toUpperCase()}_SUCCESS`,
  DELETE_FAILURE: `DELETE_${resourceName.toUpperCase()}_FAILURE`,
  ADD_SUCCESS: `ADD_${resourceName.toUpperCase()}_SUCCESS`,
  ADD_FAILURE: `ADD_${resourceName.toUpperCase()}_FAILURE`,
});

const createActions = (resourceName) => {
  const types = createActionTypes(resourceName);

  return {
    fetchSuccess: (items) => ({ type: types.FETCH_SUCCESS, payload: items }),
    fetchFailure: (error) => ({ type: types.FETCH_FAILURE, payload: error }),
    editSuccess: (id, newItem) => ({
      type: types.EDIT_SUCCESS,
      payload: { id, newItem },
    }),
    editFailure: (id, error) => ({
      type: types.EDIT_FAILURE,
      payload: { id, error },
    }),
    deleteSuccess: (id) => ({ type: types.DELETE_SUCCESS, payload: id }),
    deleteFailure: (id, error) => ({
      type: types.DELETE_FAILURE,
      payload: { id, error },
    }),
    addSuccess: (item) => ({ type: types.ADD_SUCCESS, payload: item }),
    addFailure: (error) => ({ type: types.ADD_FAILURE, payload: error }),
  };
};

const createThunks = (resourceName) => {
  const actions = createActions(resourceName);

  return {
    fetchItems: (tenantId) => async (dispatch) => {
      try {
        const data = await apiService.fetchAll(tenantId, resourceName);
        dispatch(actions.fetchSuccess(data));
      } catch (error) {
        dispatch(actions.fetchFailure(error.message));
      }
    },
    fetchItemById: (tenantId, id) => async (dispatch) => {
      try {
        const data = await apiService.fetchById(tenantId, resourceName, id);
        dispatch(actions.fetchSuccess([data]));
      } catch (error) {
        dispatch(actions.fetchFailure(error.message));
      }
    },
    editItem: (tenantId, id, newItem) => async (dispatch) => {
      try {
        const updatedItem = await apiService.update(
          tenantId,
          resourceName,
          id,
          newItem
        );
        dispatch(actions.editSuccess(id, updatedItem));
      } catch (error) {
        dispatch(actions.editFailure(id, error.message));
      }
    },
    deleteItem: (tenantId, id) => async (dispatch) => {
      try {
        await apiService.delete(tenantId, resourceName, id);
        dispatch(actions.deleteSuccess(id));
      } catch (error) {
        dispatch(actions.deleteFailure(id, error.message));
      }
    },
    addItem: (tenantId, newItem) => async (dispatch) => {
      try {
        const addedItem = await apiService.create(
          tenantId,
          resourceName,
          newItem
        );
        dispatch(actions.addSuccess(addedItem));
      } catch (error) {
        dispatch(actions.addFailure(error.message));
      }
    },
  };
};

export { createActionTypes, createActions, createThunks };

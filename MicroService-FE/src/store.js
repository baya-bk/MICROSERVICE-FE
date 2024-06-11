// import { configureStore } from "@reduxjs/toolkit";
// import itemsReducer from "./reducers";

// const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./action/reducers";
import { createThunks } from "./action/action";

// Example for resource "address"
const addressThunks = createThunks("getAllAddress");
const addAddressThunks = createThunks("addAddress");
const addDepartmentThunks = createThunks("addNewDepartment");
const updateDepartmentThunks = createThunks("editDepartment");
const getDepartmentThunks = createThunks("getAllDepartment");
const getDepartmentByIdThunks = createThunks("getDepartmentById");

// const addDepartmentThunks = createThunks("addDepartment");

const store = configureStore({
  reducer: {
    getAllAddress: createReducer("getAllAddress"),
    addAddress: createReducer("addAddress"),
    addNewDepartment: createReducer("addNewDepartment"),
    editDepartment: createReducer("editDepartment"),
    getAllDepartment: createReducer("getAllDepartment"),
    getDepartmentById: createReducer("getDepartmentById"),

    // Add more reducers for other resources here
  },
});

export {
  addressThunks,
  addAddressThunks,
  addDepartmentThunks,
  updateDepartmentThunks,
  getDepartmentThunks,
  getDepartmentByIdThunks,
};
export default store;

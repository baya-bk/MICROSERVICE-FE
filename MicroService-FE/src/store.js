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
const addPersonalInfoThunks = createThunks("addPersonalInfo");
const store = configureStore({
  reducer: {
    getAllAddress: createReducer("getAllAddress"),
    addAddress: createReducer("addAddress"),
    addNewDepartment: createReducer("addNewDepartment"),
    editDepartment: createReducer("editDepartment"),
    getAllDepartment: createReducer("getAllDepartment"),
    getDepartmentById: createReducer("getDepartmentById"),
    addPersonalInfo: createReducer("addPersonalInfo"),
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
  addPersonalInfoThunks,
};
export default store;

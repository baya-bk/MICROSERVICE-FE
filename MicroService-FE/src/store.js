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
// const addDepartmentThunks = createThunks("addDepartment");
// const departmentThunks = createThunks("getAllDepartments");

const store = configureStore({
  reducer: {
    getAllAddress: createReducer("getAllAddress"),
    addAddress: createReducer("addAddress"),

    // getAllDepartments: createReducer("getAllDepartments"),
    // Add more reducers for other resources here
  },
});

export { addressThunks, addAddressThunks };
export default store;

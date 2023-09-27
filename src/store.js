import { configureStore } from "@reduxjs/toolkit";
import { getUserData, loginReducer, profileSummaryReducer, workSummaryReducer } from "./components/reducers/user";


const store = configureStore({
  reducer: {
    // user: userReducer,
    login: loginReducer,
    profileSummary:profileSummaryReducer,
    workSummaryReducer:workSummaryReducer,
    userData:getUserData
  },
});

export default store;

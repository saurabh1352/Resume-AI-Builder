import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};


export const loginReducer = createReducer(
  {},
  {
    LOGIN_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },
    LOGIN_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },



    REGISTER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    REGISTER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },
    REGISTER_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    

    LOAD_PROFILE_SUMMARY: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_PROFILE_SUMMARY_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOAD_PROFILE_SUMMARY_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LOGOUT_REQUEST: (state) => {
      state.loading = true;
    },
    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    LOGOUT_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);



export const profileSummaryReducer = createReducer(
  {},
  {
   
    LOAD_PROFILE_SUMMARY: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_PROFILE_SUMMARY_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },
    LOAD_PROFILE_SUMMARY_FAILURE: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

  

    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.message = null;
    },
  }
);

export const workSummaryReducer = createReducer(
  {},
  {
   
    LOAD_WORK_SUMMARY: (state) => {
      state.isloading = true;
      state.isAuthenticated = false;
    },
    LOAD_WORK_SUMMARY_SUCCESS: (state, action) => {
      state.isloading = false;
      state.isAuthenticated = true;
      state.workSummarymessage = action.payload;
    },
    LOAD_WORK_SUMMARY_FAILURE: (state, action) => {
      state.isloading = false;
      state.isAuthenticated = false;
      state.iserror = action.payload;
    },

  

    CLEAR_ERRORS: (state) => {
      state.iserror = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.workSummarymessage = null;
    },
  }
);


export const getUserData = createReducer(
  {},
  {
   
    LOAD_USER_DATA: (state) => {
      state.isloading = true;
      state.isAuthenticated = false;
    },
    LOAD_USER_DATA_SUCCESS: (state, action) => {
      state.isloading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    LOAD_USER_DATA_FAILURE: (state, action) => {
      state.isloading = false;
      state.isAuthenticated = false;
      state.iserror = action.payload;
    },

  

    CLEAR_ERRORS: (state) => {
      state.iserror = null;
    },
    CLEAR_MESSAGE: (state) => {
      state.userData = null;
    },
  }
);



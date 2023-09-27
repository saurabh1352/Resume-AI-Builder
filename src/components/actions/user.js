import axios from "axios";
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_REQUEST",
      });
  
      const { data } = await axios.post(
       
        "http://localhost:4000/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.response.data.message,
      });
    }
  };


  export const RegisterUser = (Email, Password,Name) => async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_REQUEST",
      });
  
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
            Email, Password,Name
        },
        {
          headers: {
            "Content-Type": "application/json",
            "token":sessionStorage.getItem("myCookie")
          },
        }
      );
  
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  export const AiProfileSummary = (job_title, tech_stack,currentExp,summary) => async (dispatch) => {
  
    try {
      dispatch({
        type: "LOAD_PROFILE_SUMMARY",
      });
  
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/summary",
        {
            job_title, tech_stack,currentExp,summary
        },
        {
          headers: {
            "Content-Type": "application/json",
            "token":sessionStorage.getItem("myCookie")
          },
        }
      );
  
      dispatch({
        type: "LOAD_PROFILE_SUMMARY_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_PROFILE_SUMMARY_FAILURE",
        payload: error.response.data.message,
      });
    }
  };



  export const AiWorkSummary = (job_title,Employer,tech_stack,Start_date,End_date) => async (dispatch) => {

    try {
      dispatch({
        type: "LOAD_WORK_SUMMARY",
      });
  
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/workSummary",
        {
            job_title,Employer,tech_stack,Start_date,End_date
        },
        {
          headers: {
            "Content-Type": "application/json",
            "token":sessionStorage.getItem("myCookie")
          },
         
        }
      );
  
      dispatch({
        type: "LOAD_WORK_SUMMARY_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_WORK_SUMMARY_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  export const getUserData=(email)=>async(dispatch)=>{
    try {
        dispatch({
          type: "LOAD_USER_DATA",
        });
    
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/getuserdata",
          {
            email
          },
          {
            headers: {
              "Content-Type": "application/json",
              "token":sessionStorage.getItem("myCookie")
            },
          }
        );
    
        dispatch({
          type: "LOAD_USER_DATA_SUCCESS",
          payload: data.message,
        });
      } catch (error) {
        dispatch({
          type: "LOAD_USER_DATA_FAILURE",
          payload: error?.response?.data?.message,
        });
      }
  }
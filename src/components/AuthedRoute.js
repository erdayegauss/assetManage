import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useGlobalState } from "../contexts/GlobalContext";
//import jwt from "jsonwebtoken";

const AuthedRoute = ({ component: Component, ...rest }) => {
  const {
    toggleLoading,
  } = useGlobalState();

 
  function checkAuth() {
    toggleLoading(true);
    //editSuccess("");
    const token = localStorage.getItem("myToken");
    const authed = localStorage.getItem("authed");

/*    
    if (token) {
      let decoded = jwt.decode(token, { complete: true });
      let dateNow = new Date();
      console.log(decoded);
      //editError("");
      if (decoded.payload.exp * 1000 < dateNow) {
        localStorage.removeItem("myToken");
        localStorage.removeItem("authed");
        localStorage.removeItem("didAuth");
        toggleLoading(false);
        return "error";
      } else {
        changeCurrentUser({
          user: { email: decoded.payload.email, id: decoded.payload.id },
          status: "success",
          two_fa_Validated: true,
        });
        toggleLoading(false);
        return "success";
      }
    } else {
      toggleLoading(false);
      //editError("Please login to view this resource!");
      return "error";
    }
*/

  }

  return (
    <Route
      {...rest}
      render={(props) => {
       
        return checkAuth() === "success" ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        );
      }   

    }
    ></Route>



  );
};

export default AuthedRoute;

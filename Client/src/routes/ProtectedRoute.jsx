import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { hideLoading, showLoading } from "../redux/loadersSlice";
import { setUser } from "../redux/usersSlice";
import { message } from "antd";

import { GetCurrentUser } from "../apiCalls/users";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users).user;
  console.log(user);
  const getCurrentUser = async () => {
    try {
      //show loader
      dispatch(showLoading());

      //make API call to get current user
      const response = await GetCurrentUser();

      //hide loader
      dispatch(hideLoading());
      if (response.success) {
        //dispatch current user to usersReducer
        dispatch(setUser(response.data));
      } else {
        //dispatch null to userReducer
        dispatch(setUser(null));
        message.error(response.message);
        //delete token from local storage
        localStorage.removeItem("token");
        //redirect to login page
        navigate("/login");
      }
    } catch (error) {
      //hide loader
      dispatch(hideLoading());
      //dispatch null to usersReducer
      dispatch(setUser(null));
      //show error
      message.error(error);
      // redirect to login page
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //get the current user details and set in store
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {user && (
        <div className="layout p-1">
          <div className="header bg-primary flex justify-between p-2">
            <div>
              <h1
                className="text-2xl text-white cursor-pointer"
                onClick={() => navigate("/")}
              >
                Book My Show {user.name}
              </h1>
            </div>

            <div className="bg-white p-1 flex gap-1">
              <i className="ri-shield-user-line text-primary mt-1"></i>
              <h1
                className="text-sm underline"
                onClick={() => {
                  if (user.isAdmin) {
                    navigate("/admin");
                  } else {
                    navigate("/profile");
                  }
                }}
              >
                {user.name}
              </h1>

              <i
                className="ri-logout-box-r-line mt-1"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                LOGOUT
              </i>
            </div>
          </div>
          <div className="content mt-1 p-1">{children}</div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;

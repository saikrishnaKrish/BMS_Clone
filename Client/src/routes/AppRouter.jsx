import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
               </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Admin/>}/>
          {/* <Route path="/profile" element={<profile/>}/> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

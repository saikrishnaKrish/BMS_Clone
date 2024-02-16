import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";
import TheatreForMovie from "../pages/TheatreForMovie";
import { BookShow } from "../pages/BookShow";
import { useSelector } from "react-redux";
import Profile from "../pages/Admin/Profile";

const AppRouter = () => {
  const {loading} =useSelector((state)=>state.loaders)


  return (
    <>
    {loading && (
        <div className="loader-parent">
            <div className="loader"></div>
        </div>
      )}
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
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movieId" 
          element={<ProtectedRoute>
          <TheatreForMovie/>
          </ProtectedRoute>}/>
          <Route path="/bookshow/:id" element={<ProtectedRoute>
            <BookShow/>
          </ProtectedRoute>}/>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

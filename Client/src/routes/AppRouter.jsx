import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/LoginPage';

const AppRouter=()=>{
    
    return <>    
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/> 
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </>
}

export default AppRouter;
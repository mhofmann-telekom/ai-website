import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Confluence from './Confluence/Confluence';
import Login from '../components/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Architecture from './Architecture/Architecture';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/confluence" element={<ProtectedRoute><Confluence/></ProtectedRoute>} />
                <Route path="/architecture" element={<ProtectedRoute><Architecture/></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;

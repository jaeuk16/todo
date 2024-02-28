import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Edit from './Edit/Edit';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

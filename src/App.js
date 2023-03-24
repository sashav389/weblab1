import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import {AboutApp} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";
import {Registartion} from "./pages/Registartion"

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AboutApp />} />
                <Route path="registration" element={<Registartion />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="blog" element={<Blog />} />
                <Route path="*" element={<h1>Error page </h1>} />
            </Routes>
        </div>
    );
}
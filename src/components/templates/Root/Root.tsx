import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCountries from '../AllCountries/AllCountries';
import Country from '../Country/Country';

const Root = () => {
    return (
        <Routes>
            <Route path="" element={<AllCountries />} />
            <Route path="/country/:ccA2" element={<Country />} />
        </Routes>
    );
};

export default Root;

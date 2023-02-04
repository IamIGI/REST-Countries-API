import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCountries from '../AllCountries/AllCountries';
import Country from '../Country/Country';

const Root = () => {
    return (
        <Routes>
            <Route path="/REST-Countries-API/" element={<AllCountries />} />
            <Route path="/REST-Countries-API/country/:ccA2" element={<Country />} />
        </Routes>
    );
};

export default Root;

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useAppDispatch } from '../../../app/store';
import './FilterRegion.css';
import { regionData } from '../../../data/generalData';
import { filterRegion, selectDarkMode } from '../../../features/countries/countriesSlice';
import { useSelector } from 'react-redux';

const FilterRegion = () => {
    const dispatch = useAppDispatch();
    const darkMode = useSelector(selectDarkMode);
    const [showFilters, setShowFilters] = useState(false);
    const [region, setRegion] = useState<string>('');

    const handleFilters = (region: string) => {
        dispatch(filterRegion({ region }));
        setRegion(region);
        setShowFilters(false);
    };

    return (
        <div className={`filterSection ${darkMode}__mode__background`}>
            <div className="filterRelative" onClick={() => setShowFilters(!showFilters)}>
                <input
                    className={`filterInput ${darkMode}__mode__element ${darkMode}__mode__text pointer`}
                    placeholder={region !== '' ? region : 'Filter by Region'}
                    disabled
                />
                <div className="filterDropDownIcon">
                    <IoIosArrowDown />
                </div>
            </div>
            {showFilters && (
                <div className={`filterOptions ${darkMode}__mode__element ${darkMode}__mode__text`}>
                    <ul>
                        <li className="pointer" onClick={() => handleFilters(regionData.africa)}>
                            {regionData.africa}
                        </li>
                        <li className="pointer" onClick={() => handleFilters(regionData.america)}>
                            {regionData.america}
                        </li>
                        <li className="pointer" onClick={() => handleFilters(regionData.asia)}>
                            {regionData.asia}
                        </li>
                        <li className="pointer" onClick={() => handleFilters(regionData.europa)}>
                            {regionData.europa}
                        </li>
                        <li className="pointer" onClick={() => handleFilters(regionData.ocenia)}>
                            {regionData.ocenia}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterRegion;

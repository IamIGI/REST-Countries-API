import React from 'react';
import './FilterRegion.css';
import { IoIosArrowDown } from 'react-icons/io';

const FilterRegion = () => {
    return (
        <div className="filterSection">
            <input className="filterInput pointer" placeholder="Filter by Region" disabled />
            <div className="filterDropDownIcon">
                <IoIosArrowDown />
            </div>
        </div>
    );
};

export default FilterRegion;

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import FilterRegion from '../../molecules/FilterRegion/FilterRegion';
import './SearchAndFilterSection.css';

const SearchAndFilterSection = () => {
    return (
        <div className="searchAndFilters">
            <div className="searchSection">
                <input className="searchField" placeholder="Search for a country..." />
                <div className="searchIcon">
                    <AiOutlineSearch />
                </div>
            </div>

            <FilterRegion />
        </div>
    );
};

export default SearchAndFilterSection;

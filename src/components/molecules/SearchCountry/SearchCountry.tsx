import React, { KeyboardEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch } from '../../../app/store';
import { searchCountry } from '../../../features/countries/countriesSlice';
import './SearchCountry.css';

const SearchCountry = () => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchTerm = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(searchCountry({ searchTerm: searchValue }));
            setSearchValue('');
        }
    };

    return (
        <div className="searchSection">
            <input
                className="searchField"
                placeholder="Search for a country..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => handleSearchTerm(e)}
            />
            <div className="searchIcon">
                <AiOutlineSearch />
            </div>
        </div>
    );
};

export default SearchCountry;

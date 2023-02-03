import React from 'react';
import { getCountries } from '../../../api/countries';
import './CountryPreview.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';
import { refreshStatus } from '../../../features/countries/countriesSlice';

interface CountryPreviewProps {
    country: getCountries;
}

const CountryPreview = ({ country }: CountryPreviewProps) => {
    const dispatch = useAppDispatch();

    return (
        <NavLink
            to={`/country/${country.ccA2}`}
            onClick={() => dispatch(refreshStatus())}
            className="countryPreview pointer"
        >
            <div className="image">
                <img src={country.flag} alt={country.name} />
            </div>
            <div className="description">
                <h3>{country.name}</h3>
                <ul>
                    <li>
                        <b>Population:</b> {country.population}
                    </li>
                    <li>
                        <b>Region:</b>: {country.region}
                    </li>
                    <li>
                        <b>Capital:</b>: {country.capital}
                    </li>
                </ul>
            </div>
        </NavLink>
    );
};

export default CountryPreview;

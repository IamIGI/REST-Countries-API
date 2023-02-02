import React from 'react';
import { getCountries } from '../../../api/countries';
import './CountryPreview.css';

interface CountryPreviewProps {
    country: getCountries;
}

const CountryPreview = ({ country }: CountryPreviewProps) => {
    return (
        <div className="countryPreview">
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
        </div>
    );
};

export default CountryPreview;

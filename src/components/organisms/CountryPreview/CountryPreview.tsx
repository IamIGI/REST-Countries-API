import { getCountries } from '../../../api/countries';
import './CountryPreview.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';
import { refreshStatus, selectDarkMode } from '../../../features/countries/countriesSlice';
import formatPrices from '../../../utils/formatPrices';
import { useSelector } from 'react-redux';

interface CountryPreviewProps {
    country: getCountries;
}

const CountryPreview = ({ country }: CountryPreviewProps) => {
    const dispatch = useAppDispatch();
    const darkMode = useSelector(selectDarkMode);

    return (
        <NavLink
            to={`/REST-Countries-API/country/${country.ccA2}`}
            onClick={() => dispatch(refreshStatus())}
            className={`countryPreview ${darkMode}__mode__element ${darkMode}__mode__text  pointer`}
        >
            <div className="image">
                <img src={country.flag} alt={country.name} />
            </div>
            <div className="description">
                <h3>{country.name}</h3>
                <ul>
                    <li>
                        <b>Population:</b> {formatPrices(country.population)}
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

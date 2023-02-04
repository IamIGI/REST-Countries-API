import { useGetCountryById } from '../../../features/countries/countriesHooks';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './Country.css';
import { useDispatch, useSelector } from 'react-redux';
import { refreshStatus, selectDarkMode } from '../../../features/countries/countriesSlice';
import formatPrices from '../../../utils/formatPrices';

const Country = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    const ccA2 = useParams().ccA2 as string;

    const { data, isError, isLoading, error } = useGetCountryById(ccA2);

    return (
        <div>
            {isError ? (
                <>{error}</>
            ) : isLoading ? (
                <>Loading...</>
            ) : (
                data && (
                    <div className="country">
                        <div className="country__navBar">
                            <NavLink
                                to="/REST-Countries-API/"
                                onClick={() => dispatch(refreshStatus())}
                                className={`country__navBar--button ${darkMode}__mode__element  ${darkMode}__mode__text pointer `}
                            >
                                <AiOutlineArrowLeft />
                                <div>Back</div>
                            </NavLink>
                        </div>
                        <div className="country__content">
                            <div className="country__content--image">
                                <img src={data.flag} alt={data.name} />
                            </div>
                            <div className="country__content__description">
                                <h1>{data.name}</h1>
                                <div className="country__content__description__info">
                                    <div>
                                        <ul>
                                            <li>
                                                <b>Native Name:</b> {data.nativeName}
                                            </li>
                                            <li>
                                                <b>Population:</b> {formatPrices(data.population)}
                                            </li>
                                            <li>
                                                <b>Region:</b> {data.region}
                                            </li>
                                            <li>
                                                <b>Sub Region:</b> {data.subregion}
                                            </li>
                                            <li>
                                                <b>Capital:</b> {data.capital}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <b>Top Level Domain:</b> {data.topLevelDomain}
                                            </li>
                                            <li>
                                                <b>Currencies:</b> {data.currencies}
                                            </li>
                                            <li>
                                                <b>Languages:</b> {data.languages}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="country__content__description__border">
                                    <b>Border Countries:</b>
                                    {data.borderCountries.map((country) => (
                                        <span className={` ${darkMode}__mode__element`}>{country}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Country;

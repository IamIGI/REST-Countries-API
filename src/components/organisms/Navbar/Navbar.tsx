import './Navbar.css';
import { BsMoonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeDarkMode, refreshStatus, selectDarkMode } from '../../../features/countries/countriesSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);

    return (
        <div className={`navBar  ${darkMode}__mode__background`}>
            <NavLink
                to="/"
                onClick={() => dispatch(refreshStatus())}
                className={`navBar__title  ${darkMode}__mode__text   pointer`}
            >
                <h1>Where is the world?</h1>
            </NavLink>

            <div className="navBar__darkMode pointer" onClick={() => dispatch(changeDarkMode())}>
                <BsMoonFill />
                <p>Dark Mode</p>
            </div>
        </div>
    );
};

export default Navbar;

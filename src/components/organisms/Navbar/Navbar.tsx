import './Navbar.css';
import { BsMoonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshStatus } from '../../../features/countries/countriesSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <div className="navBar">
            <NavLink to="/" onClick={() => dispatch(refreshStatus())} className="navBar__title pointer">
                <h1>Where is the world?</h1>
            </NavLink>

            <div className="navBar__darkMode pointer">
                <BsMoonFill />
                <p>Dark Mode</p>
            </div>
        </div>
    );
};

export default Navbar;

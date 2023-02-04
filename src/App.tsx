import { useSelector } from 'react-redux';
import './App.css';

import MainTemplate from './components/templates/MainTemplate/MainTemplate';
import Root from './components/templates/Root/Root';
import { selectDarkMode } from './features/countries/countriesSlice';

function App() {
    const darkMode = useSelector(selectDarkMode);
    return (
        <div className={`App ${darkMode}__mode__background ${darkMode}__mode__text`}>
            <MainTemplate>
                <Root />
            </MainTemplate>
        </div>
    );
}

export default App;

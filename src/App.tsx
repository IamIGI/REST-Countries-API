import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';
import AllCountries from './components/AllCountries/AllCountries';
import Country from './components/Country/country';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AllCountries />
                <Country />
            </div>
        </Provider>
    );
}

export default App;

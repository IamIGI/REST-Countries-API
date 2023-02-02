import './App.css';

import MainTemplate from './components/templates/MainTemplate/MainTemplate';
import Root from './components/templates/Root/Root';

function App() {
    return (
        <div className="App">
            <MainTemplate>
                <Root />
            </MainTemplate>
        </div>
    );
}

export default App;

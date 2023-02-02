import React, { ReactNode } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import './MainTemplate.css';
import store from '../../../app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="mainTemplate">
                    <Navbar />
                    <div className="fullSize">{children}</div>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default MainTemplate;

import { ReactNode } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import './MainTemplate.css';

import { BrowserRouter } from 'react-router-dom';

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <BrowserRouter>
            <div className="mainTemplate">
                <Navbar />
                <div className="fullSize">{children}</div>
            </div>
        </BrowserRouter>
    );
};

export default MainTemplate;

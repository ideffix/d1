import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
    return (
        <div>
            <Helmet lang="pl" title="D1 Detailing" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            {children}
        </div>
    );
};

export default MainTemplate;

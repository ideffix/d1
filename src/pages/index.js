import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Main from '../components/Main/Main';

const HomePage = () => {
    return (
        <div className="bg-gray-800 h-screen bg">
            <NavBar />
            <Main />
        </div>
    );
};

export default HomePage;

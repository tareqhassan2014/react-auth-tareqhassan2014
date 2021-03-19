import React from 'react';
import backgroundPhoto from '../../Photo/home.jpg';
const Home = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${backgroundPhoto})`, height: '95vh' }} >

        </div >
    );
};

export default Home;
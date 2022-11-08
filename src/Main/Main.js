import React from 'react';
import { Outlet } from 'react-router-dom';
import Mainfooter from '../component/Sheared/Footer/Mainfooter';
import Header from '../component/Sheared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Mainfooter></Mainfooter>
        </div>
    );
};

export default Main;
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { MarvelPage , DcPage, HeroPage , SearchPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage/>}/>
                    <Route path="dc" element={<DcPage/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="hero/:heroeId" element={<HeroPage/>}/>
                    {/* <Route path="login" element={<LoginPage/>}/> */}
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                </Routes>
            </div>
        </div>
    )
}
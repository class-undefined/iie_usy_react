import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {NavigationGuards} from './NavigationGuards';
import {navBarConfig} from './config';
import {Nav} from '../layout/NavBar/NavBar';


export const SidebarExample = () => {
    return (
        <Router>
            <Nav/>
            <NavigationGuards routes={navBarConfig}/>
        </Router>
    )
}

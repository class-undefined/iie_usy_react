import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {NavigationGuards} from './NavigationGuards';
import {navBarConfig} from './config';

export const SidebarExample = () => {
    return (
        <Router>
            <NavigationGuards routes={navBarConfig}/>
        </Router>
    )
}

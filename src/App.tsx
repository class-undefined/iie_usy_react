import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {SidebarExample} from './route';
import {NavBar} from './layout/NavBar'
import './App.scss'

function App() {
    return (
        <div className="App">
            <NavBar/>
            <main className={'main'}>
                <SidebarExample/>
            </main>
        </div>
    );
}

export default App;

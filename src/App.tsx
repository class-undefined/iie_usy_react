import React from 'react';
import {SidebarExample} from './route';
import {NavBar} from './layout/NavBar/NavBar'
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

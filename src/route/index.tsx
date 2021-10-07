import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {Home} from '../view/Home/Home';
import {Nav} from '../layout/NavBar/NavBar';

const routes = [

    {
        path: '/bubblegum',
        exact: true,
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>,
    },
    {
        path: '/shoelaces',
        exact: true,
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>,
    },
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <Home/>,
    },

]
export const SidebarExample = () => {
    return (
        <Router>
            <Nav/>
            <main className={'main'}>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route key={index} path={route.path} exact={route.exact} children={<route.main/>}/>
                        )
                    })}
                </Switch>
            </main>
        </Router>
    )
}

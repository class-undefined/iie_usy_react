import {RouteConfig} from './config';
import {Route, useLocation} from 'react-router-dom';
import {NotFind} from '../view/404/NotFind';
import {Nav} from '../layout/NavBar/NavBar';
import React from 'react';

const isPass = (route: RouteConfig | undefined) => {
    if (route && route.component) return true
    return false
}
const Main = (props: {component: React.Component | React.FC}) => {
    return (
        <div>
            <Nav/>
            <main className={'main'}>
                {props.component}
            </main>
        </div>
    )
}
export const NavigationGuards = (props: {routes: Array<RouteConfig>}) => {
    const {routes} = props
    const location = useLocation()
    const {pathname} = location
    const targetRoute = routes.find((route) => route.path === pathname)
    const pass = isPass(targetRoute)
    console.log(`路由守卫检测路由是否匹配：route: 【${pathname}】 | ${pass}`);
    if (pass) {
        const Component = (targetRoute as RouteConfig).component// 如果pass 则不会为空
        // @ts-ignore
        return <Route exact={targetRoute.exact} path={targetRoute.path} render={() => <Main component={<Component/>}/>}/>
    }
    return <NotFind/>
}

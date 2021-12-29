import {RouteConfig} from './types';
import {Route, useLocation} from 'react-router-dom';
import {NotFind} from '../view/404/NotFind';
import React from 'react';
import {setTitle} from '../utils';
import {BaseLayout} from '../layout/BaseLayout/BaseLayout';

const isPass = (route: RouteConfig | undefined) => {
    console.log(route);
    if (route && route.component) return true
    return false
}
const Main = (props: {base?: React.Component | React.FC | undefined, component: React.Component | React.FC}) => {
    const NoBaseLayout = () => {
        return (
            <main className={'main'}>
                {props.component}
            </main>
        )
    }
    if (props.base === undefined) return <NoBaseLayout/>
    return (
        // @ts-ignore
        <props.base>
            <NoBaseLayout/>
        </props.base >
    )
}
export const NavigationGuards = (props: {routes: Array<RouteConfig>}) => {
    const {routes} = props
    const location = useLocation()
    const {pathname} = location
    console.log(pathname)
    const targetRoute = routes.find((route) => route.path === pathname)
    const pass = isPass(targetRoute)
    console.log(`路由守卫检测路由是否匹配：route: 【${pathname}】 | ${pass}`);
    if (pass) {
        const Component = (targetRoute as RouteConfig).component// 如果pass 则不会为空
        // @ts-ignore
        setTitle(targetRoute.name)
        // @ts-ignore
        // 如果是首页的话，则不使用BaseLayout
        if (pathname === '/') return <Route exact={targetRoute.exact} path={targetRoute.path} render={() => <Main component={<Component/>}/>}/>
        // @ts-ignore
        return <Route exact={targetRoute.exact} path={targetRoute.path} render={() => <Main base={BaseLayout} component={<Component/>}/>}/>
    }
    // @ts-ignore
    return <Main component={<NotFind/>}/>
}

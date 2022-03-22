import { RouteConfig } from './types';
import { Redirect, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { setTitle } from '../utils';
import { BaseLayout } from '../layout/BaseLayout/BaseLayout';
import { RouteUtil } from './utils';
import { PackView } from '../view/PackView/PackView';

export const routePath = (route: RouteConfig | undefined | null) => {
    if (!route) return "/404"
    if (route.component) return route.path
    console.log(route, route.component, route.redirect)
    if (!route.component && route.redirect) return route.redirect
    return "/404"
}

const WrapComponent = (props: { component: React.FC }) => {
    const { component } = props
    return (
        <main className={'main'}>
            <BaseLayout children={component} />
        </main>
    )
}

export const NavigationGuards = () => {
    const location = useLocation()
    const { pathname } = location
    const routeNode = RouteUtil.getRoute(pathname)
    /* 如果未找到该路径下的routeNode，则重定向至404 */
    if (!RouteUtil.isRouteNode(routeNode)) return <Redirect to="/404" />
    const route = routeNode.value
    if (route === null) throw new Error("what? value is rootNode?")
    /* 如果有重定向元素，则优先重定向 */
    if (route.redirect) return <Redirect to={route.redirect} />
    /* 如果当前路由既无重定向，又无component，说明暂未开发 */
    if (!route.component) {
        console.log(`当前路由:[${routeNode.getFullPath()}]视图暂未实现`)
        return <Redirect to="/" />
    }

    /* 获取routeNode的完整url路径 */
    const path = routeNode.getFullPath()
    /* 如果路径为404则跳转至404页面 */
    if (path === "/404") {
        const LostPage = route.component as React.FC
        return <LostPage />
    }
    const F = () => <PackView route={route} /> // 封装高阶组件
    const Component = () => {
        return (
            <main className={'main'}>
                <F />
            </main>
        )
    }
    setTitle(route.name)
    return <Route exact={route.exact} path={path}
        render={() => pathname === '/' ? <Component /> : <WrapComponent component={F} />} />
}

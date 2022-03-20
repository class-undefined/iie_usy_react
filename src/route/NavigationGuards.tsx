import { RouteConfig } from './types';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { NotFind } from '../view/404/NotFind';
import React, { Component } from 'react';
import { setTitle } from '../utils';
import { BaseLayout } from '../layout/BaseLayout/BaseLayout';
import { RouteUtils } from './utils';
import { PackView } from '../view/PackView/PackView';
import { navBarConfig } from './config';

export const isPass = (route: RouteConfig | undefined | null) => {
    if (route && route.component) return true
    return false
}

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
    const targetRoute = RouteUtils.getRoute(pathname)
    const pass = isPass(targetRoute)
    console.log(`路由守卫检测路由是否匹配：route: 【${pathname}】 | ${pass}`, targetRoute);
    if (targetRoute?.redirect) return <Redirect to={targetRoute?.redirect} />
    if (targetRoute && pass) {
        if (targetRoute.path === '/404') {
            const LostPage = targetRoute.component as React.FC
            return <LostPage />
        }
        const F = () => <PackView route={targetRoute} /> // 封装高阶组件
        const Component = () => {
            return (
                <main className={'main'}>
                    <F />
                </main>
            )
        }
        setTitle(targetRoute.name)
        // 如果是首页的话，则不使用BaseLayout
        return <Route exact={targetRoute.exact} path={targetRoute.path}
            render={() => pathname === '/' ? <Component /> : <WrapComponent component={F} />} />
    }
    const path = routePath(targetRoute)
    console.log(path)
    return <Redirect to={path} />
}

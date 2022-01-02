import {RouteConfig} from './types';
import {Redirect, Route, useLocation} from 'react-router-dom';
import {NotFind} from '../view/404/NotFind';
import React, {Component} from 'react';
import {setTitle} from '../utils';
import {BaseLayout} from '../layout/BaseLayout/BaseLayout';
import {RouteUtils} from './utils';
import {PackView} from '../view/PackView';

const isPass = (route: RouteConfig | undefined | null) => {
    if (route && route.component) return true
    return false
}

const WrapComponent = (props: { component: React.FC }) => {
    const {component} = props
    return (
        <main className={'main'}>
            <BaseLayout children={component}/>
        </main>
    )
}

export const NavigationGuards = (props: { routes: Array<RouteConfig> }) => {
    const location = useLocation()
    const {pathname} = location
    const targetRoute = RouteUtils.getRoute(pathname)
    const pass = isPass(targetRoute)
    console.log(`路由守卫检测路由是否匹配：route: 【${pathname}】 | ${pass}`);
    if (targetRoute && pass) {
        if (targetRoute.path === '/404') {
            const LostPage = targetRoute.component as React.FC
            return <LostPage/>
        }
        const F = () => <PackView route={targetRoute}/> // 高阶组件封装
        const Component = () => {
            return (
                <main className={'main'}>
                    <F/>
                </main>
            )
        }

        setTitle(targetRoute.name)
        // 如果是首页的话，则不使用BaseLayout
        return <Route exact={targetRoute.exact} path={targetRoute.path}
                      render={() => pathname === '/' ? <Component/> : <WrapComponent component={F}/>}/>
    }
    return <Redirect to={'/404'}/>
}

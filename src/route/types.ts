import React from 'react';

export interface RouteSetting {
    //路由视图组件是否显示基础Layout布局
    isShowLayout?: boolean,
    // 是否需要添加到导航栏
    isAddNavBar?: boolean,
}

export interface RouteMeta {
    config?: RouteSetting,

    [keys: string]: any
}

export interface BaseRoute {
    // 路由路径
    path: string,
    // 配置信息
    meta?: RouteMeta,
}


export interface RouteConfig extends BaseRoute {
    // 路由名
    name: string,
    // 是否精确匹配
    exact: boolean,
    // 组件
    component?: React.FC,
    // 子路由
    children?: Array<RouteConfig>,
    // 重定向
    redirect?: string
}

export type RouteConfigArray = RouteConfig[]

/* 路由name对应的路由组合的映射表 */
export interface RouterPathMap {
    [path: string]: string
}

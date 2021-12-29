import React from 'react';

export interface BaseRoute {
    path: string,
    meta?: any,
}

export interface RouteConfig extends BaseRoute{
    name: string,
    exact: boolean,
    component?: React.Component | React.FC,
    children?: Array<RouteConfig>
}

export type RouterConfigArray = RouteConfig[]

/* 路由name对应的路由组合的映射表 */
export interface RouterPathMap {
    [path: string] : string
}

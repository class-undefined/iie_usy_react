import { RouteConfig } from '../../route/types';
import * as H from 'history';
import { RouteNode } from '../../route/node/node';

const PreRoutePath = class {
    private prePath: string = ''
    public getPrePath = () => this.prePath
    public setPrePath = (path: string) => {
        this.prePath = path
    }
    public clear = () => {
        this.prePath = ''
    }
}
const preRoutePath = new PreRoutePath()

/**
 * 使用页面跳转函数
 * @param history useHistory
 */
export const useJumpToView = (history: H.History) => {
    return (route: RouteNode) => {
        /**
         * 页面跳转
         * @param route RouteNoe
         */
        history.push(route.getFullPath())
        return
    }
}
/**
 * 适用于二级导航栏，更新路由前缀
 */
export const useUpdatePrePath = () => {
    return (route: RouteConfig) => {
        preRoutePath.clear()
        preRoutePath.setPrePath(route.path)
    }
}

/* 路由过滤器 */
const Fitter = class {
    /**
     * (是否需要增加到NavBar，默认true)如果route具备route.meta.config.isAddNavBar属性且值为false，则返回true
     * @param route
     */
    public isAddNavBar(route: RouteConfig) {
        return route.meta && route.meta.config && route.meta.config.isAddNavBar === false
    }

    /**
     * 如果route具备route.meta.config.isShowLayout属性且值为false，则返回true
     * @param route
     */
    public isShowLayout(route: RouteConfig) {
        return route.meta && route.meta.config && route.meta.config.isShowLayout === false
    }
}

export const RouteConfigFitter = new Fitter()

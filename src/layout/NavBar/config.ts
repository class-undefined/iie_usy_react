import { RouteConfig } from '../../route/types';
import * as H from 'history';
import { RouteNode } from '../../route/node/node';

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

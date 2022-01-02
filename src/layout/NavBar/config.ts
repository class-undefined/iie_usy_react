import {RouteConfig} from '../../route/types';
import * as H from 'history';

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
    return (route: RouteConfig, isTop: boolean = false) => {
        /**
         * 页面跳转
         * @param route 导航栏的RouteConfig
         * @param isTop 是否为一级路由
         */
        /* 如果是顶级元素，则清空前缀路由并跳转 */
        if (isTop) {
            preRoutePath.clear()
            history.push(route.path)
            return
        }
        preRoutePath.setPrePath(preRoutePath.getPrePath() + route.path)
        history.push(preRoutePath.getPrePath())
        preRoutePath.clear()
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
     * 如果route具备route.meta.config.isAddNavBar属性且值为false，则返回true
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

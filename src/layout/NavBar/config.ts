import {RouteConfig} from '../../route/config';
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

/**
 * 分割路由
 * @Example path: '/abc/def' -> ['/abc', '/def']
 * @param path
 */
export const spliceRoutePath = (path: string) => {
    let s = ''
    if (path === '/') return ['/']
    else s = path[0]
    let right = path.length - 1

    /* 去除尾部非法的斜杠/ */
    while (right > 0 && path[right] === '/') right--
    path = path.substr(0, right + 1)

    const paths = [] as string[]
    /* 从第二个字符开始遍历 */
    for (let i = 1; i < path.length; i++) {
        if (i === path.length - 1) s += path[i]
        if (path[i] === '/' || i === path.length - 1) {
            paths.push(s)
            s = ''
        }
        s += path[i]
    }
    return paths
}

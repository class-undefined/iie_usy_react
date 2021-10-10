import {RouteConfig} from '../route/config';

/**
 * 分割路由
 * @param pathname 路由地址
 */
export const splitRoutePath = (pathname: string) => {
    if (pathname.length > 0 && pathname.charAt(0) === '/') pathname = pathname.substr(1, pathname.length)
    return pathname.split('/').filter(path => path !== '')
}


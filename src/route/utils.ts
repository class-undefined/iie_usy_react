import {getBreadListParam, navBarConfig} from './config';
import {RouterConfigArray, RouterPathMap} from './types';
import {reverseMap, trim} from '../utils';

/* 路由各路径与名称的映射表 */
class _RouteUtils {
    private routePathMap: RouterPathMap = getBreadListParam(navBarConfig) // k: routePath v: routeName
    private pathNameMap: RouterPathMap = reverseMap(this.routePathMap) // k: routeName v: routePath
    private routeMap: RouterConfigArray = navBarConfig
    /**
     * 通过路径名快速获取路由路径名称
     * @param _path 路由路径
     */
    public getRouteName = (_path: string): string => {
        if (_path === '/') return this.routePathMap['/']
        const path = trim(_path)
        if (this.routePathMap[path]) return this.routePathMap[path]
        else throw Error('getRouteName')
    }

    /**
     * 根据路径名称快速获取路由路径
     * @param _name 路径名称
     */
    public getRoutePath = (_name: string): string => {
        if (this.pathNameMap[_name]) return this.pathNameMap[_name]
        else throw Error('getRoutePath')
    }

    /**
     * 将路径数组转换成路径url
     * @param paths
     * @example
     * const paths = ['info', 'leadership']
     * const ans = concatRoutePath(paths)
     * ans === '/info/leadership'
     */
    public concatRoutePath = (paths: string[]): string => {
        return '/' + paths.reduce((pre, path) => pre + '/' + path)
    }

    /**
     * 通过路径数组获取路径名
     * @param paths 路径数组
     * @example
     * const paths = ['info', 'leadership']
     * const names = getRouteNames(paths)
     * names === ['学院概况', '领导团队']
     */
    public getRouteNames(paths: string[]): string[]

    /**
     * 通过路径字符串获取路径名
     * @param path 路径字符串
     * @example
     * const path = '/info/leadership'
     * const names = getRouteNames(path)
     * names === ['学院概况', '领导团队']
     */
    public getRouteNames(path: string): string[]

    public getRouteNames(pathsOrString: string[] | string): string[] {
        /* 若参数为字符串数组则调用此方法 */
        const stringArrayFun = () => {
            if ((pathsOrString as string[]).length === 0) return [this.getRouteName('/')]
            const preFix: string[] = []
            const ans: string[] = []
            for (const path of pathsOrString as string[]) {
                preFix.push(path)
                const concatedPath = this.concatRoutePath(preFix)
                ans.push(this.getRouteName(concatedPath))
            }
            return ans
        }

        /* 若参数为字符串则调用此方法 */
        const stringFun = () => {
            /* 如果仅为/ 则返回['/'] */
            if (pathsOrString as string === '/') this.getRouteNames(['/'])
            let s = trim(pathsOrString as string)
            if (s[0] === '/') s = s.substring(1, s.length)
            const ans = s.split('/')
            return this.getRouteNames(ans)
        }
        if (typeof pathsOrString === 'string') return stringFun()
        return stringArrayFun()
    }

    /**
     * 获取路由列表的所有路由名称
     * @example
     * ['/', '/info/introduction', '/info/leadership', ...]
     */
    public getRoutePaths = (): string[] => {
        return Object.keys(this.routePathMap)
    }
}

export const RouteUtils = new _RouteUtils()

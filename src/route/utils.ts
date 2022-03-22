import { getBreadListParam, navBarConfig } from './config';
import { RouteConfig, RouteConfigArray, RouterPathMap } from './types';
import { reverseMap } from '../utils';
import { trim } from '../utils/StringUtils';
import { spliceRoutePath } from '../utils/router';
import { createRouteTree, RouteNode, RouteNodeType } from './node/node';

/* 路由各路径与名称的映射表 */
class _RouteUtils {
    private routePathMap: RouterPathMap = getBreadListParam(navBarConfig) // k: routePath v: routeName
    private pathNameMap: RouterPathMap = reverseMap(this.routePathMap) // k: routeName v: routePath
    private routeMap: RouteConfigArray = navBarConfig
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

    /**
     * 根据路由配置搜索pathname获取RouteConfig, 若路由配置中不包含pathname，则返回null
     * @param pathname
     * @example
     * const param = '/info/introduction'
     * const target: RouteConfig = RouteUtils.getRouter(param)
     * console.log(target);
     */
    public getRoute = (pathname: string): RouteConfig | null => {
        const paths = spliceRoutePath(pathname) // 作为队列使用
        if (paths.length === 0) return null //数组长度出现异常，不应该出现0长度的数组
        /**
         * 逐级寻找navRouterConfig里面的路由，返回最后一级RouteConfig
         * @param routes: RouteConfigArray
         */
        let merge_path = ''
        const dfs = (routes: RouteConfigArray): RouteConfig | undefined => {
            // console.assert(paths.length !== 0, "数组长度出现异常，不应该出现0长度的数组")
            // 从routes中找出与paths队列的队首元素相匹配的route
            const route = routes.find((route) => { return paths[0] === route.path })
            // base case
            if (route === undefined) return undefined
            merge_path += route.path
            // 如果paths为1，则命中route即可返回
            if (route.children === undefined || route.children.length === 0 || paths.length === 1) {
                return { ...route, path: merge_path } // 返回一个拷贝 不能修改源RouteConfig
            }
            paths.shift() // 出队
            return dfs(route.children)
        }
        const route = dfs(navBarConfig)
        if (route === undefined) return null
        // console.assert(route !== undefined, `RouteUtils.getRouter 获取路由失败，未查找到路由`)
        return route
    }
    /**
     * 逐级寻找navRouterConfig里面的路由，查找成功返回整个路由段上的RouteConfig，否则返回null
     * @param pathname
     * @example
     * const param = '/info/introduction'
     * const target: RouteConfigArray = RouteUtils.getRouters(param)
     * console.log(target);
     */
    public getRoutes = (pathname: string): RouteConfigArray | null => {
        const paths = spliceRoutePath(pathname) // 作为队列使用
        if (paths.length === 0) return null //数组长度出现异常，不应该出现0长度的数组
        const routeConfigArray = [] as RouteConfigArray
        /**
         * 递归获取路由对象，将其添加到routeConfigArray中
         * @param routes: RouteConfigArray => RouteConfig.children
         * @param path
         */
        const dfs = (routes: RouteConfigArray, path: string): void => {
            const route = routes.find((route) => { return route.path === paths[0] })
            // base case
            if (route === undefined) return undefined
            if (route.path === paths[0]) paths.shift() // 当前路由与队首路径一致则出队，否则不出队
            routeConfigArray.push({ ...route, path: path + route.path })
            if (route.children === undefined || route.children.length === 0) return;

            dfs(route.children, path + route.path)
        }
        dfs(navBarConfig, '')
        if (paths.length !== 0 || routeConfigArray.length === 0) return null // 说明没有找到路由
        // console.assert(routeConfigArray.length !==  0, `RouteUtils.getRoutes 获取路由失败，未查找到路由 ${pathname}`)
        return routeConfigArray
    }

}

export const RouteUtils = new _RouteUtils()

// 准备一次Route数据结构重构，根据RouteConfig构建一颗RouteNode

export class RouteUtil {
    private static routeNodeTree: RouteNode = createRouteTree(navBarConfig)
    private constructor() { }

    /**
     * 获取RouteNode根节点（root节点本身不附带route数据，数据在root.children里面）
     * @returns RouteRootNode
     */
    public static getRootRoute = (): Readonly<RouteNode> => {
        return RouteUtil.routeNodeTree
    }

    /**
     * 获取指定url的RouteNode
     * @param pathname url
     * @returns RouteNode
     */
    public static getRoute = (pathname: string): Readonly<RouteNode> | null => {
        const paths = spliceRoutePath(pathname) // 作为队列使用
        // bfs
        let cursor = RouteUtil.routeNodeTree
        while (paths.length !== 0) {
            const path = paths.shift()
            const node = cursor.children?.find(route => route.value?.path === path)
            if (!node) return null
            cursor = node
        }
        return cursor
    }

    /** 判断是否为一个RouteNode节点 */
    public static isRouteNode = (node: RouteNode | null | undefined): node is RouteNode => {
        if (!node || node.$$routeNodetype === undefined) return false
        return node.$$routeNodetype === RouteNodeType
    }

}
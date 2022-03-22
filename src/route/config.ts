import { Home } from '../view/Home/Home';
import { Introduction } from '../view/Info/introduction/Introduction';
import { RouteConfig, RouteConfigArray, RouterPathMap } from './types';
import { NotFind } from '../view/404/NotFind';
import { Structure } from '../view/Info/structure/Structure';


/* 路由组合对应路由name的映射表 */

export const navBarConfig: RouteConfig[] = [
    {
        name: '首页',
        path: '/',
        exact: true,
        component: Home,
        meta: {
            config: {
                isShowLayout: false
            }
        }
    },
    {
        name: '学院概况',
        path: '/info',
        exact: false,
        meta: {},
        redirect: '/info/introduction',
        children: [
            {
                name: '学院简介',
                path: '/introduction',
                exact: true,
                component: Introduction
            },
            {
                name: '专业介绍',
                path: '/structure',
                exact: true,
                component: Structure
            },
            {
                name: '领导团队',
                path: '/leadership',
                exact: true,
            },
            {
                name: '师资力量',
                path: '/teachers',
                exact: true,
            },
        ],
    },
    {
        name: '学术科研',
        path: '/scientific',
        exact: false,
        children: [
            {
                name: '科研管理',
                path: '/management',
                exact: true,
            },
            {
                name: '科研动态',
                path: '/dynamic',
                exact: true,
            },
            {
                name: '学科前沿',
                path: '/advanced',
                exact: true,
            },
            {
                name: '科研成果',
                path: '/achievement',
                exact: true,
            },
        ],
    },
    {
        name: '教育教学',
        path: '/education',
        exact: false,
        children: [
            {
                name: '管理制度',
                path: '/management',
                exact: true,
            },
            {
                name: '专业建设',
                path: '/pro-build',
                exact: true,
            },
            {
                name: '课程建设',
                path: '/class-build',
                exact: true,
            },
            {
                name: '教学改革',
                path: '/reform',
                exact: true,
            },
            {
                name: '教学成果',
                path: '/achievement',
                exact: true,
            },
            {
                name: '实验室 ',
                path: '/laboratory',
                exact: true,
            },
        ],
    },
    {
        name: '党团建设',
        path: '/organization',
        exact: false,
        children: [
            {
                name: '党建工作',
                path: '/party-work',
                exact: true,
            },
            {
                name: '共青团工作',
                path: '/youth-work',
                exact: true,
            },
            {
                name: '工会活动',
                path: '/union-activity',
                exact: true,
            },
        ],
    },
    {
        name: '招生就业',
        path: '/zsjy',
        exact: false,
        children: [
            {
                name: '招生信息',
                path: '/info',
                exact: true,
            },
            {
                name: '就业动态',
                path: '/activity',
                exact: true,
            },
            {
                name: '校友会',
                path: '/alumni-association',
                exact: true,
            },
        ],
    },
    {
        name: '学生天地',
        path: '/student',
        exact: false,
        children: [
            {
                name: '学生活动',
                path: '/activity',
                exact: true,
            },
            {
                name: '学习风采',
                path: '/highlight',
                exact: true,
            },
            {
                name: '学科竞赛',
                path: '/competition',
                exact: true,
            },
            {
                name: '学生社团',
                path: '/societies',
                exact: true,
            },
        ],
    },
    {
        name: '基地建设',
        path: '/build',
        exact: false,
        children: [
            {
                name: '网课基地',
                path: '/online-class',
                exact: true,
            },
            {
                name: '实训基地',
                path: '/training-base',
                exact: true,
            },
            {
                name: '双创基地',
                path: '/innovation-base',
                exact: true,
            },
            {
                name: '应用研发',
                path: '/app-dev',
                exact: true,
            },
        ],
    },
    {
        name: 'Not Found',
        path: '/404',
        exact: true,
        component: NotFind,
        meta: {
            config: { isAddNavBar: false, isShowLayout: false }
        }
    }
]

/* 回溯获取单条route下的所有路由组合 */
export const getSinglePath = (route: RouteConfig) => {
    const ans: Array<[string, string]> = []
    const dfs = (_route: RouteConfig, _path: string) => {
        const { name, path } = _route
        ans.push([name, _path + path])
        if (!_route.children) return
        for (const __route of _route.children) {
            dfs(__route, _path + path)
        }
    }
    dfs(route, '')
    return ans
}



/* 得到面包屑参数 */
export const getBreadListParam = (routes: RouteConfigArray): RouterPathMap => {
    const routeMap: RouterPathMap = {}
    for (const routeConfig of routes) {
        const paths = getSinglePath(routeConfig) // 单条路由下的所有路径组合
        for (const _path of paths) {
            const [title, path] = _path
            routeMap[path] = title
        }
    }
    return routeMap
}


/* 路由各路径与名称的映射表 */
// export const routePathMap = getBreadListParam(navBarConfig)
// console.log(routePathMap);

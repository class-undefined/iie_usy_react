export interface RouteConfig {
    name: string,
    path: string,
    exact: boolean,
    meta?: any,
    children?: Array<RouteConfig>
}

export const navBarConfig: Array<RouteConfig> = [
    {
        name: '学院概况',
        path: 'info',
        exact: true,
        meta: {},
        children: [
            {
                name: '学院简介',
                path: 'aaa',
                exact: true,
            },
            {
                name: '专业介绍',
                path: 'bbb',
                exact: true,
            },
            {
                name: '领导团队',
                path: 'bbb',
                exact: true,
            },
            {
                name: '师资力量',
                path: 'bbb',
                exact: true,
            },
        ],
    },
    {
        name: '学术科研',
        path: 'scientific',
        exact: true,
        children: [
            {
                name: '科研管理',
                path: 'ccc',
                exact: true,
            },
            {
                name: '科研动态',
                path: 'dddd',
                exact: true,
            },
            {
                name: '学科前沿',
                path: 'dddd',
                exact: true,
            },
            {
                name: '科研成果',
                path: 'dddd',
                exact: true,
            },
        ],
    },
    {
        name: '教育教学',
        path: 'education',
        exact: true,
        children: [
            {
                name: '管理制度',
                path: 'ccc',
                exact: true,
            },
            {
                name: '专业建设',
                path: 'dddd',
                exact: true,
            },
            {
                name: '课程建设',
                path: 'dddd',
                exact: true,
            },
            {
                name: '教学改革',
                path: 'dddd',
                exact: true,
            },
            {
                name: '教学成果',
                path: 'dddd',
                exact: true,
            },
            {
                name: '实验室 ',
                path: 'dddd',
                exact: true,
            },
        ],
    },
    {
        name: '党团建设',
        path: 'organization',
        exact: true,
        children: [
            {
                name: '党建工作',
                path: 'ccc',
                exact: true,
            },
            {
                name: '共青团工作',
                path: 'dddd',
                exact: true,
            },
            {
                name: '工会活动',
                path: 'dddd',
                exact: true,
            },
        ],
    },
    {
        name: '招生就业',
        path: 'zsjy',
        exact: true,
        children: [
            {
                name: '招生信息',
                path: 'ccc',
                exact: true,
            },
            {
                name: '就业动态',
                path: 'dddd',
                exact: true,
            },
            {
                name: '校友会',
                path: 'dddd',
                exact: true,
            },
        ],
    },
    {
        name: '学生天地',
        path: 'student',
        exact: true,
        children: [
            {
                name: '学生活动',
                path: 'ccc',
                exact: true,
            },
            {
                name: '学习风采',
                path: 'dddd',
                exact: true,
            },
            {
                name: '学科竞赛',
                path: 'dddd',
                exact: true,
            },
            {
                name: '学生社团',
                path: 'dddd',
                exact: true,
            },
        ],
    },
    {
        name: '基地建设',
        path: 'build',
        exact: true,
        children: [
            {
                name: '网课基地',
                path: 'ccc',
                exact: true,
            },
            {
                name: '实训基地',
                path: 'dddd',
                exact: true,
            },
            {
                name: '双创基地',
                path: 'dddd',
                exact: true,
            },
            {
                name: '应用研发',
                path: 'dddd',
                exact: true,
            },
        ],
    },
]

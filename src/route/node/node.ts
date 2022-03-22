import { deepCopyObject } from "../../utils"
import { RouteMeta, RouteConfig } from "../types"
export interface RouteNodeData extends Omit<RouteConfig, "children"> {
}
export interface IRouteNode {
    parent: IRouteNode | null,
    value: RouteNodeData | null,
    children: IRouteNode[] | null
}
class RouteNode implements IRouteNode {
    public parent: IRouteNode | null
    public value: RouteNodeData | null
    public children: IRouteNode[] | null
    constructor(parent: RouteNode, value: RouteNodeData | null, children: RouteNode[] | null) {
        this.parent = parent
        this.value = value
        this.children = children
    }
}
/** 创建RouteNode */
export const createRouteNode = (parent: IRouteNode | null, value: RouteNodeData | null, children: IRouteNode[] | null): IRouteNode => {
    return { parent, value, children }
}

/** 构建RouteNodeTree */
export const createRouteTree = (routeConfigs: RouteConfig[]) => {
    /** 前序遍历创建RouteNode */
    const dfs = (config: RouteConfig, parent: IRouteNode) => {
        const value = deepCopyObject(config, "children")
        if (!config.children || config.children.length === 0) return createRouteNode(parent, value, null)
        parent.value = value
        for (const routeConfig of config.children) {
            if (!parent.children) parent.children = []
            const node = createRouteNode(parent, deepCopyObject(routeConfig, "children"), null)
            parent.children.push(node)
            /* 向下递归父节点则为node */
            dfs(routeConfig, node)
        }
    }
    const root = createRouteNode(null, null, [])// 创建头节点
    for (const routeConfig of routeConfigs) {
        const node = createRouteNode(root, deepCopyObject(routeConfig, "children"), null)
        dfs(routeConfig, node)
        root.children?.push(node)
    }
    return root
}
// const routeNodeTree = createRouteTree(navBarConfig)
// TODO: 重构RouteUtils工具类 
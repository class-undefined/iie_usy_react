import { deepCopyObject } from "../../utils"
import { RouteMeta, RouteConfig } from "../types"
export interface RouteNodeData extends Omit<RouteConfig, "children"> {
}
export interface RouteNode {
    parent: RouteNode | null,
    value: RouteNodeData | null,
    children: RouteNode[] | null
}

export const createRouteNode = (parent: RouteNode | null, value: RouteNodeData | null, children: RouteNode[] | null): RouteNode => {
    return { parent, value, children }
}

/** 构建RouteNodeTree */
export const createRouteTree = (routeConfigs: RouteConfig[]) => {
    /** 前序遍历创建RouteNode */
    const dfs = (config: RouteConfig, parent: RouteNode) => {
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
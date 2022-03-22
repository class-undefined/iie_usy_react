import { deepCopyObject } from "../../utils"
import { RouteMeta, RouteConfig } from "../types"
export interface RouteNodeData extends Omit<RouteConfig, "children"> {
}
export interface IRouteNode {
    parent: IRouteNode | null,
    value: RouteNodeData | null,
    children: IRouteNode[] | null
}

export const RouteNodeType = Symbol("ROUTE_NODE_TYPE")

/** 路由节点 */
export class RouteNode implements IRouteNode {
    public parent: RouteNode | null
    public value: RouteNodeData | null
    public children: RouteNode[] | null
    public $$routeNodetype: Symbol
    constructor(parent: RouteNode | null, value: RouteNodeData | null, children: RouteNode[] | null) {
        this.parent = parent
        this.value = value
        this.children = children
        this.$$routeNodetype = RouteNodeType
    }

    /** 获取当前Node的完整path */
    public getFullPath(): string {
        let cursor: RouteNode | null = this
        let path = ""
        while (cursor.parent !== null) {
            path = cursor.value?.path + path
            cursor = cursor.parent
        }
        return path
    }

    /** 获取根路由到当前路由的路径 */
    public getFullPathNodes(): Readonly<RouteNode>[] {
        let cursor: RouteNode | null = this
        const pathNodes = []
        while (cursor.parent !== null) {
            pathNodes.push(cursor)
            cursor = cursor.parent
        }
        return pathNodes.reverse()
    }

}
/** 创建RouteNode */
export const createRouteNode = (parent: IRouteNode | null, value: RouteNodeData | null, children: IRouteNode[] | null): IRouteNode => {
    return { parent, value, children }
}

/** 构建RouteNodeTree */
export const createRouteTree = (routeConfigs: RouteConfig[]) => {
    /** 前序遍历创建RouteNode */
    const dfs = (config: RouteConfig, parent: RouteNode) => {
        const value = deepCopyObject(config, "children")
        if (!config.children || config.children.length === 0) return undefined
        parent.value = value
        for (const routeConfig of config.children) {
            if (!parent.children) parent.children = []
            const node = new RouteNode(parent, deepCopyObject(routeConfig, "children"), null)
            parent.children.push(node)
            /* 向下递归父节点则为node */
            dfs(routeConfig, node)
        }
    }
    const root = new RouteNode(null, null, [])// 创建头节点
    for (const routeConfig of routeConfigs) {
        const node = new RouteNode(root, deepCopyObject(routeConfig, "children"), null)
        dfs(routeConfig, node)
        root.children?.push(node)
    }
    return root
}
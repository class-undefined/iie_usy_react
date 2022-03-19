export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type NodeLevel = 1 | 2 | 3 | 4 | 5 | 6
export type RootLevel = 0
export interface VFileData {
    depth: NodeLevel | RootLevel,
    value: string
}

export interface TocNode extends VFileData {
    children: TocNode[],
    parent: TocNode | null
}
/** 构建一颗tocNodeTree */
export const createTocNodeTree = (heading: VFileData[]): TocNode => {
    const createNode = (depth: NodeLevel | RootLevel, value: string, parent: TocNode | null): TocNode => {
        return {
            depth, value, parent, children: []
        }
    }
    const root = createNode(0, "", null)
    let cursor = root
    for (let i = 0; i < heading.length; i++) {
        const { depth, value } = heading[i]
        if (cursor.depth < depth) {
            const node = createNode(depth, value, cursor)
            cursor.children.push(node)
            cursor = node
        }
        else {
            // 回到上层找父节点
            while (cursor.parent !== null && cursor.depth >= depth) cursor = cursor.parent
            const node = createNode(depth, value, cursor)
            cursor.children.push(node)
            cursor = node
        }
    }
    return root
}

export const cutParent = (node: TocNode) => {
    node.parent = null
    for (const n of node.children) {
        cutParent(n)
    }
    return node
}
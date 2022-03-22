export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type NodeLevel = 1 | 2 | 3 | 4 | 5 | 6
export type RootLevel = 0
export interface VFileData {
    depth: NodeLevel | RootLevel,
    value: string
}

export interface TocNode extends VFileData {
    children: TocNode[],
    parent: TocNode | null,
    count: number // 记录第count次相同的value
}
/** 构建一颗tocNodeTree */
export const createTocNodeTree = (heading: VFileData[]): TocNode => {
    const createNode = (depth: NodeLevel | RootLevel, value: string, parent: TocNode | null, valueCount: number): TocNode => {
        return {
            depth, value, parent, children: [], count: valueCount
        }
    }
    const map: Map<string, number> = new Map()
    const root = createNode(0, "", null, 0)
    let cursor = root
    for (let i = 0; i < heading.length; i++) {
        const { depth, value } = heading[i]
        if (map.has(value) === false) map.set(value, 0)
        map.set(value, map.get(value) as number + 1)
        const valueCount = map.get(value) as number
        if (cursor.depth < depth) {
            const node = createNode(depth, value, cursor, valueCount * 2)
            cursor.children.push(node)
            cursor = node
        }
        else {
            // 回到上层找父节点
            while (cursor.parent !== null && cursor.depth >= depth) cursor = cursor.parent
            const node = createNode(depth, value, cursor, valueCount * 2) // 应对react-markdown回调会同时调用两次的bug
            cursor.children.push(node)
            cursor = node
        }
    }
    return root
}

/** 切断父级prent的联系 */
export const cutParent = (node: TocNode) => {
    node.parent = null
    for (const n of node.children) {
        cutParent(n)
    }
    return node
}


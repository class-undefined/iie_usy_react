export interface VFileData {
    depth: number,
    value: string
}

export interface TocNode extends VFileData {
    children: TocNode[],
    parent: TocNode | null
}
/** 构建一颗tocNodeTree */
export const createTocNodeTree = (heading: VFileData[]) => {
    const createNode = (depth: number, value: string, parent: TocNode | null): TocNode => {
        return {
            depth, value, parent, children: []
        }
    }
    const root = createNode(0, "", null)
    let cursor = root
    for (let i = 0; i < heading.length; i++) {
        const { depth, value } = heading[i]
        console.log(depth, value)
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
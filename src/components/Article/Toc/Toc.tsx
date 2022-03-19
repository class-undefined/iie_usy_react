import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkHeadings from '@vcarl/remark-headings';
import "./Toc.scss"
interface TocProps {
    markdown: string
}
interface VFileData {
    depth: number,
    value: string
}

interface VFileNode extends VFileData {
    children: VFileNode[],
    parent: VFileNode | null
}
/** 构建一颗tocNodeTree */
const processVFileData = (heading: VFileData[]) => {
    const createNode = (depth: number, value: string, parent: VFileNode | null): VFileNode => {
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
export const Toc = (props: TocProps) => {
    const { markdown } = props
    const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkHeadings)
    processor.process(markdown).then(vfile => {
        const headings = (vfile.data.headings as unknown) as VFileData[]
        const root = processVFileData(headings)
        console.log(root)
    })

    return (
        <ul className="toc-tree-continaer">
            <ul>

            </ul>
        </ul>
    )
}
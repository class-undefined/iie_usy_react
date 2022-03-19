import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkHeadings from '@vcarl/remark-headings';
import "./Toc.scss"
import { createTocNodeTree, cutParent, NodeLevel, RootLevel, TocNode, VFileData } from "../../../utils/markdown";
import { useEffect, useState } from "react";
interface TocProps {
    markdown: string
}

interface TocItemProps {
    className?: string,
    node: TocNode
}

interface AnchorProps {
    className?: string,
    depth: NodeLevel | RootLevel,
    value: string
}
// http://localhost:3000/info/introduction#bravo
const Anchor = (props: AnchorProps) => {
    const { className, depth, value } = props
    return (
        <div className={className}>
            <span></span>
            <a href="javascript(void);">{value}</a>
        </div>
    )
}
const TocItem: React.FC<TocItemProps> = (props: TocItemProps) => {
    const { className, node } = props
    const { depth, value } = node
    if (node.children.length === 0) {
        return (
            <li>
                <Anchor depth={depth} value={value} />
            </li>
        )
    }
    return (
        <li>
            <Anchor depth={depth} value={value} />
            <ul>
                {
                    node.children.map(nodeProps => (<TocItem node={nodeProps} />))
                }
            </ul>
        </li>
    )
}

export const Toc = (props: TocProps) => {
    const [tocNode, setTocNode] = useState({ depth: 0, value: "", children: [], parent: null } as TocNode)
    const { markdown } = props
    const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkHeadings)
    useEffect(() => {
        processor.process(markdown).then(vfile => {
            const headings = (vfile.data.headings as unknown) as VFileData[]
            const root = createTocNodeTree(headings)
            setTocNode(root)
        })
    }, [tocNode.children.length])

    return (
        <TocItem node={tocNode} />
    )
}
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkHeadings from '@vcarl/remark-headings';
import "./Toc.scss"
import { createTocNodeTree, cutParent, NodeLevel, RootLevel, TocNode, VFileData } from "../../../utils/markdown";
import { useEffect, useState } from "react";
import { linkHandle } from "../Heading/Heading";
import Link from "@mui/material/Link";
interface TocProps {
    markdown: string,
    className?: string
}

interface TocItemProps {
    className?: string,
    node: TocNode
}

interface AnchorProps {
    className?: string,
    depth: NodeLevel | RootLevel,
    value: string,
    control: boolean,
    isClose?: boolean,
    onClick?: () => void
}
// http://localhost:3000/info/introduction#bravo
const Anchor = (props: AnchorProps) => {
    const { depth, value, control, isClose } = props
    const onClick = props.onClick ? props.onClick : undefined
    let text = isClose ? "+" : "-"
    text = control ? text : ""
    const className = props.className ? `toc-anchor-contaienr ${props.className}` : "toc-anchor-contaienr"
    let menuClassName = control ? "toc-anchor" : "toc-expander"
    if (control && isClose) menuClassName += " toc-anchor-close"
    return (
        <div className={className}>
            <span onClick={onClick} className={menuClassName}>
                {text}
            </span>
            <a className="toc-anchor-link" onClick={e => linkHandle(e, depth, value)}>{value}</a>
        </div>
    )
}

const tocListSwitch = (isClose: boolean) => {
    return isClose ? "toc-list-close" : "toc-list-open"
}

const TocItem: React.FC<TocItemProps> = (props: TocItemProps) => {
    const { className, node } = props
    const { depth, value } = node
    const [isClose, setClose] = useState(false)
    const control = node.children.length !== 0
    if (node.children.length === 0) {
        return (
            <li className="toc-li">
                <Anchor control={control} depth={depth} value={value} />
            </li>
        )
    }

    const listClassName = tocListSwitch(isClose)
    const handle = () => {
        setClose(!isClose)
    }
    return (
        <li className="toc-li">
            {depth === 0 ? null : <Anchor onClick={handle} isClose={isClose} control={control} depth={depth} value={value} />}
            <ul className={listClassName}>
                {
                    node.children.map((nodeProps, index) => (<TocItem key={index} node={nodeProps} />))
                }
            </ul>
        </li>
    )
}

export const Toc = (props: TocProps) => {
    const [tocNode, setTocNode] = useState({ depth: 0, value: "", children: [], parent: null } as TocNode)
    const { markdown } = props
    const className = props.className ? props.className : ""
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
        <div className={"toc-tree-container " + className}>
            <TocItem node={tocNode} />
        </div>
    )
}
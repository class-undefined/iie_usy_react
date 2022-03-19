import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkHeadings from '@vcarl/remark-headings';
import "./Toc.scss"
import { createTocNodeTree, VFileData } from "../../../utils/markdown";
interface TocProps {
    markdown: string
}

export const Toc = (props: TocProps) => {
    const { markdown } = props
    const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkHeadings)
    processor.process(markdown).then(vfile => {
        const headings = (vfile.data.headings as unknown) as VFileData[]
        const root = createTocNodeTree(headings)
        console.log(root)
    })

    return (
        <ul className="toc-tree-continaer">
            <ul>

            </ul>
        </ul>
    )
}
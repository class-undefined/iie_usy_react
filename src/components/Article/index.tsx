import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { remark } from 'remark'
import toc, { HtmlElementNode, ListItemNode } from "@jsdevtools/rehype-toc"
import slug from "rehype-slug"
import { IArticle } from "../../type/article";
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./index.scss"
import { MouseEventHandler, useEffect } from "react";
import { dummyAnchorPrefix, HeadingBlock, idPrefix } from "./Heading/Heading";
import { scrollToAnchor } from "../../utils/dom";
interface ArticleProps {
    className?: string,
    article: Readonly<IArticle>,

}
// const tocNode = (tocItem: ListItemNode, heading: HtmlElementNode) => {
//     // console.log(tocItem)
//     const { children, tagName/*type, tagName, properties*/ } = tocItem
//     const list = (children as unknown) as ListItemNode[]
//     for (const node of list || []) {
//         const tagName = (node.tagName as unknown) as string
//         const { properties } = node
//         // if (tagName === "a") {
//         //     properties.id = properties.href + "-toc"
//         //     const dom = document.getElementById(properties.id || "") as HTMLLinkElement
//         //     setTimeout(() => {
//         //         console.log(dom)
//         //         // dom.target = "_self"
//         //         // properties.target = "_self"
//         //     })
//         // }

//     }
//     // properties.onclick = undefined
//     // properties.target = "_self"
//     // properties.aaa = "_self"
//     // properties.onClick = (e: MouseEvent) => e.preventDefault()
//     // return heading// heading
//     // if (!children) return null
//     // const node = children[0]
//     // console.log(11)
//     // return <a {...properties} onClick={e => e.preventDefault()} target="_self">{node.data}</a>
// }
export const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    const { className, article } = props
    const { title, content, updateTime, releaseTime, id } = article

    useEffect(() => {
        /* 根据hash更新定位锚点 */
        if (document.location.hash.length < 1) return
        const anchor = decodeURI(document.location.hash.substring(1, document.location.hash.length))
        scrollToAnchor(dummyAnchorPrefix + idPrefix + anchor)
    }, [])
    return (
        <article key={id} className={className ? className : ""}>
            <header>
                <p>{title}</p>
            </header>
            <ReactMarkdown
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={theme}
                                className={"code-style"}
                                showLineNumbers={true}
                                showInlineLineNumbers={true}
                                wrapLongLines={true}
                                language={match[1]} // match[1]
                                highlighter={"hljs" || "prism"}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                    h1: HeadingBlock,
                    h2: HeadingBlock,
                    h3: HeadingBlock,
                    h4: HeadingBlock,
                    h5: HeadingBlock,
                    h6: HeadingBlock,
                }}
                // allowedElements={['iframe', 'code']}
                linkTarget='_blank'
                rehypePlugins={[[slug], /*[toc, { customizeTOCItem: tocNode, customizeTOC: (e: HtmlElementNode) => console.log(e) }],*/]} // preventDefault
                remarkPlugins={[[remarkGfm]]} />
            <footer>
                <span className={"release-time"}>编辑于: {releaseTime}</span>
            </footer>
        </article>
    )
}
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import slug from "rehype-slug"
import { IArticle } from "../../type/article";
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./index.scss"
import { useEffect, useState } from "react";
import { dummyAnchorPrefix, HeadingBlock, HeadingBlockHOC, HeadingBlockProps, idPrefix, toc } from "./Heading/Heading";
import { scrollToAnchor } from "../../utils/dom";
import "./markdown-style.scss"
import { Toc } from "./Toc/Toc";
import { Divider } from "../Divider/Divider";
import Collapse from "@mui/material/Collapse/Collapse";
import { setTimeout } from "timers";
interface ArticleProps {
    className?: string,
    article: Readonly<IArticle>,
}

export const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    const { className, article } = props
    const { title, content, updateTime, releaseTime, id, pv } = article
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        /* 根据hash更新定位锚点 */
        // console.log(toc.length)
        setTimeout(() => setChecked(true), 0)
        if (document.location.hash.length >= 1) {
            const anchor = decodeURI(document.location.hash.substring(1, document.location.hash.length))
            scrollToAnchor(dummyAnchorPrefix + idPrefix + anchor)
        }
    }, [])
    const map = new Map()
    return (
        <article key={id} className={className ? "article " + className : "article"}>
            <header>
                <p>{title}</p>
            </header>
            <div className="grid-container">
                <aside className="toc">
                    <Toc markdown={content} />
                </aside>
                <Collapse in={checked} collapsedSize={1000} timeout={1000}>
                    <main className="markdown-view-content">
                        <ReactMarkdown
                            children={content}
                            className={"markdown-privew"}
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
                                            wrapLongLines={false}
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
                                h1: HeadingBlockHOC(map),
                                h2: HeadingBlockHOC(map),
                                h3: HeadingBlockHOC(map),
                                h4: HeadingBlockHOC(map),
                                h5: HeadingBlockHOC(map),
                                h6: HeadingBlockHOC(map),
                            }}
                            // allowedElements={['iframe', 'code']}
                            linkTarget='_blank'
                            rehypePlugins={[[slug]]} // preventDefault
                            remarkPlugins={[[remarkGfm]]} />
                        <Divider />
                        <footer>
                            <p className={"note pv"}>浏览次数: {pv}</p>
                            <p className={"note release-time"}>编辑于: {releaseTime}</p>
                        </footer>

                    </main>
                </Collapse>
            </div>
        </article>
    )
}
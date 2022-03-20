import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { remark } from 'remark'
import { HtmlElementNode, ListItemNode } from "@jsdevtools/rehype-toc"
import slug from "rehype-slug"
import { IArticle } from "../../type/article";
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./index.scss"
import { useEffect, useState } from "react";
import { dummyAnchorPrefix, HeadingBlock, idPrefix, toc } from "./Heading/Heading";
import { scrollToAnchor } from "../../utils/dom";
import "./markdown-style.scss"
import { Toc } from "./Toc/Toc";
interface ArticleProps {
    className?: string,
    article: Readonly<IArticle>,
}

export const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    const { className, article } = props
    const { title, content, updateTime, releaseTime, id } = article
    useEffect(() => {
        /* 根据hash更新定位锚点 */
        // console.log(toc.length)
        if (document.location.hash.length >= 1) {
            const anchor = decodeURI(document.location.hash.substring(1, document.location.hash.length))
            scrollToAnchor(dummyAnchorPrefix + idPrefix + anchor)
        }
    }, [])
    // toc.length = 0
    return (
        <article key={id} className={className ? "article " + className : "article"}>
            <header>
                <p>{title}</p>
            </header>
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
                    h1: HeadingBlock,
                    h2: HeadingBlock,
                    h3: HeadingBlock,
                    h4: HeadingBlock,
                    h5: HeadingBlock,
                    h6: HeadingBlock,
                }}
                // allowedElements={['iframe', 'code']}
                linkTarget='_blank'
                rehypePlugins={[[slug]]} // preventDefault
                remarkPlugins={[[remarkGfm]]} />
            <footer>
                <span className={"release-time"}>编辑于: {releaseTime}</span>
                <div><Toc markdown={content} /></div>
            </footer>
        </article>
    )
}
import React, { ReactElement, MouseEvent } from "react"
import ReactDOM from "react-dom"
import { HeadingProps as HeadingType } from "react-markdown/lib/ast-to-react"
import { ReactNode } from "react-markdown/lib/react-markdown"
import { useLocation } from "react-router-dom"
import { scrollToAnchor } from "../../../utils/dom"
import { HeadingElement, NodeLevel } from "../../../utils/markdown"
import "./Heading.scss"
interface HeadingProps {
    type: HeadingElement,
    className?: string,
    children: ReactNode[]
    [props: string]: any
}
export const Heading = ({ type, children, ...props }: HeadingProps) => {
    return React.createElement(type, props, children)
}

const linkHandle = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToAnchor(dummyAnchorPrefix + id)
    e.preventDefault()
}

export const toc = [] as string[]
export const idPrefix = "md-id-"
export const dummyAnchorPrefix = "dummy-"
export const HeadingBlock = (props: HeadingType) => {
    const { level, children } = props
    const element: HeadingElement = `h${level as NodeLevel}`
    // scrollToAnchor(idPrefix + document.location.hash)
    if (children && children.length > 0) {
        const id = typeof children[0] === "string" ? children[0] : (children[0] as any).props.children[0]
        const nodeValue = `${idPrefix}${id}`
        return (
            <Heading type={element} id={nodeValue} className={`md-heading`}>
                <a onClick={e => linkHandle(e, nodeValue)} target="_self" className={`md-anchor md-anchor-${element}`}>
                    <div className="anchor">
                        🔥
                    </div>
                    {/* <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg> */}
                </a>
                <a id={`dummy-${nodeValue}`} style={{ position: "relative", top: "-70px" }}></a>
                {/* {children} */}
                <span className={`md-title md-title-${element}`}>{children}</span>
            </Heading>
        )
    }
    return <>{children}</>;

}
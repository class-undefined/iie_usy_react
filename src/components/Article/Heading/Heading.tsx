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

export const createAnchorId = (id: string) => {
    return dummyAnchorPrefix + idPrefix + id
}

export const linkHandle = (e: MouseEvent<HTMLAnchorElement | HTMLLinkElement | MouseEvent | HTMLSpanElement>, id: string) => {
    scrollToAnchor(createAnchorId(id))
    e.preventDefault()
}
export const toc = [] as string[]
export const idPrefix = "md-id-"
export const dummyAnchorPrefix = "dummy-"
export const levelPreFix = "level-"
export interface HeadingBlockProps extends HeadingType {
    map: Map<string, number>
}

export const HeadingBlock = (props: HeadingBlockProps) => {
    const { level, children, map } = props
    const element: HeadingElement = `h${level as NodeLevel}`
    if (children && children.length > 0) {
        const value = typeof children[0] === "string" ? children[0] : (children[0] as any).props.children[0]
        if (map.has(value) === false) map.set(value, 0)
        map.set(value, map.get(value) as number + 1)
        const count = map.get(value) as number
        const id = value + "-" + count
        const nodeValue = createAnchorId(id)
        console.log(nodeValue)
        return (
            <Heading type={element} className={`md-heading`}>
                <a onClick={e => linkHandle(e, id)} target="_self" className={`md-anchor md-anchor-${element}`}>
                    <div className="anchor">
                        🔥
                    </div>
                    {/* <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg> */}
                </a>
                <a id={nodeValue} style={{ position: "relative", top: "-70px" }}></a>
                <span className={`md-title md-title-${element}`}>{children}</span>
            </Heading>
        )
    }
    return <>{children}</>;

}

export const HeadingBlockHOC = (map: Map<string, number>) => {
    return (props: HeadingType) => <HeadingBlock map={map} {...props} />
}
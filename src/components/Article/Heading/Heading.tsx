import { SvgIcon } from "@mui/material"
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
        return (
            <Heading type={element} className={`md-heading`}>
                <a onClick={e => linkHandle(e, id)} target="_self" className={`md-anchor md-anchor-${element}`}>
                    <div className="anchor">
                        <SvgIcon htmlColor="#8000FF">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                        </SvgIcon>
                    </div>
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
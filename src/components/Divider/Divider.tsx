/**
 * @author: 野漫横江
 */
import "./Divider.scss"

interface DividerProps {
    contentPosition?: "left" | "right" | "center",
    children?: JSX.Element,
    className?: string,
    height?: number | string,
    width?: number | string,
    color?: string,
}

const styleMap = {
    left: "divierTextLeft",
    center: "divierTextCenter",
    right: "divierTextRight",
}

export const Divider = (props: DividerProps) => {
    const { contentPosition, children, className } = props
    const childrenClassName = `${"dividerText"} ${styleMap[contentPosition || "center"]}`
    const rootClassName = className ? `${"root"} ${className}` : "root"
    const height = props.height || 1
    const width = props.width || "100%"
    const color = props.color || "rgb(229, 231, 235)"
    const Children = () => {
        if (!children) return null
        return (
            <div className={childrenClassName}>
                {children}
            </div>
        )
    }
    return (
        <div className={rootClassName}>
            <div className={"divider-component"} style={{ width, height, borderTopColor: color, backgroundColor: color }}>
                <Children />
            </div>
        </div>
    )
}
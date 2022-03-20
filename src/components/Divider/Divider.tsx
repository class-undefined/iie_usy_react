/**
 * @author: 野漫横江
 */
import "./Divider.scss"

interface DividerProps {
    contentPosition?: "left" | "right" | "center",
    children?: JSX.Element,
    className?: string
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
            <div className={"divider-component"}>
                <Children />
            </div>
        </div>
    )
}
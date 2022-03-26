import CircularProgress from "@mui/material/CircularProgress/CircularProgress"
import "./Loading.scss"
type Color = "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | undefined
interface LoadingProps {
    isLoading: boolean,
    height?: string,
    width?: string,
    className?: string,
    state?: Color,
    color?: string
}

const defaultProps = {
    height: "100%",
    width: "100%",
    className: "loading-container",
    state: "primary" as Color
}

export const Loading = (props: LoadingProps) => {
    const { isLoading } = props
    if (!isLoading) return null
    const height = props.height || defaultProps.height
    const width = props.width || defaultProps.width
    const className = props.className ? defaultProps.className + " " + props.className : defaultProps.className
    const state = props.state || defaultProps.state
    const color = props.color ? { color: props.color } : undefined
    return (
        <div className={className} style={{ height, width, position: "relative" }}>
            <div style={{ top: "50%", position: "relative", textAlign: "center" }}>
                <CircularProgress sx={color} color={state} />
            </div>
        </div>
    )
}
import { CSSProperties } from "react"
import "./module.scss"
interface AvatarProps {
    src: string,
    className?: string,
    height?: number | string,
    width?: number | string,
    style?: CSSProperties,
    onClick?: () => void
}

export const Avatar = (props: AvatarProps) => {
    const { src, style, onClick } = props
    const rootStyle = props.className ? "avatar-container " + props.className : "avatar-container"
    const imageStyle = "avatar-image"
    const height = props.height || "50px"
    const width = props.width || "50px"
    return (
        <div onClick={onClick} className={rootStyle} style={{ height, width, ...style }}>
            <div className="avatar-shadow" style={{ backgroundImage: `url(${src})`, height, width }}></div>
            <img draggable={false} className={imageStyle} src={src} alt="avatar" style={{ width, height }} />
        </div>
    )
}
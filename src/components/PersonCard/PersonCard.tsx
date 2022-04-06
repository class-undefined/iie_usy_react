import { useState } from "react"
import { Teacher } from "../../type"
import { Avatar } from "../Avatar/Avatar"
import { CardFlipWrap } from "../CardFlipWrap/CardFlipWrap"
import "./PersonCard.scss"
import { PersonDesc } from "./PersonDesc/PersonDesc"
interface PersonCardProps {
    className?: string,
    width?: number | string,
    height?: number | string,
    back?: { width: number | string, height: number | string },
    teacher: Teacher
}

const defaultProps = {
    width: "100%",
    height: "100%",
}

export const PersonCard = (props: PersonCardProps) => {
    const { teacher } = props
    const src = "https://u-pic.oss-cn-beijing.aliyuncs.com/uPic/WOBSmg.jpg"
    const width = props.width || defaultProps.width
    const height = props.height || defaultProps.height
    const [isFlip, setIsFlip] = useState(false)
    const [rootStyle, setRootStyle] = useState("person-card-container")
    const [contentStyle, setContentStyle] = useState("person-card-content")
    const [imageSubStyle, setImageSubStyle] = useState("person-card-image-sub-container")
    const backWidth = props.back ? props.back.width : undefined
    const backHeight = props.back ? props.back.height : undefined
    const flip = () => {
        // 如果已经翻转了，那么翻回来
        if (isFlip) setContentStyle("person-card-content")
        // 如果还没有翻转，那么进行翻转
        else setContentStyle("person-card-content person-card-trigger")
        setIsFlip((n) => !n)
    }

    const front = (
        <div className={imageSubStyle}>
            <Avatar onClick={() => flip()} className="person-card-avatar" src={src} width={80} height={80} style={{ marginTop: 80 }} />
        </div>
    )
    let task = null as (NodeJS.Timeout | null)
    const recover = () => {
        task = setTimeout(flip, 2000)
    }
    const clearTask = () => {
        if (task) clearTimeout(task)
    }
    return (
        <div style={{ position: "relative", width, height }}>
            <div className={rootStyle} style={{ width, height }}>
                <div className={contentStyle}>
                    <div className="person-card-front" >
                        {front}
                    </div>
                    <div style={{ width: backWidth, height: backHeight }} onMouseEnter={clearTask} onMouseLeave={recover} className="person-card-back" >
                        {<PersonDesc teacher={teacher} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
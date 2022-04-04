import { useState } from "react"
import { Avatar } from "../Avatar/Avatar"
import { CardFlipWrap } from "../CardFlipWrap/CardFlipWrap"
import "./PersonCard.scss"
export const PersonCard = () => {
    const src = "https://u-pic.oss-cn-beijing.aliyuncs.com/uPic/WOBSmg.jpg"
    const [rootStyle, setRootStyle] = useState("person-card-container")
    const [imageRootStyle, setImageRootStyle] = useState("person-card-image-container")
    const [imageSubStyle, setImageSubStyle] = useState("person-card-image-sub-container")
    const [imageStyle, setImageStyle] = useState("person-card-image")
    const front = (
        <div className={imageSubStyle}>
            <Avatar src={src} width={80} height={80} style={{ marginTop: 80 }} />
        </div>
    )
    return (
        <div className={rootStyle}>
            <div className={imageRootStyle}>
                <CardFlipWrap width={300} height={400} front={front} back={<div>11</div>} />
            </div>
            <div>

            </div>
        </div>
    )
}
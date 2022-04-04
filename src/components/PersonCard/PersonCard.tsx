import { useState } from "react"
import { Avatar } from "../Avatar/Avatar"
import "./PersonCard.scss"
export const PersonCard = () => {
    const src = "https://u-pic.oss-cn-beijing.aliyuncs.com/uPic/WOBSmg.jpg"
    const [rootStyle, setRootStyle] = useState("person-card-container")
    const [imageRootStyle, setImageRootStyle] = useState("person-card-image-container")
    const [imageSubStyle, setImageSubStyle] = useState("person-card-image-sub-container")
    const [imageStyle, setImageStyle] = useState("person-card-image")
    return (
        <div className={rootStyle}>
            <div className={imageRootStyle}>
                <div className={imageSubStyle}>
                    <Avatar src={src} width={80} height={80} style={{ marginTop: 80 }} />
                    {/* <div className={"person-card-img-box"}>
                        <div className="person-card-img-bgc" style={{ backgroundImage: `url(${src})` }}></div>
                        <img draggable={false} className={imageStyle} src={src} alt="" />
                    </div> */}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
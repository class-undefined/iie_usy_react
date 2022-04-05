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
}

const defaultProps = {
    width: "100%",
    height: "100%",
}

const teacher: Teacher = {
    name: "杨涛",
    sex: 0,
    level: "执行院长",
    tag: "博士，教授，博士生导师".split("，"),
    profession: "大数据、人工智能、高性能计算、农业领域".split("、"),
    describe: "主持国家自然科学基金项目一项、国家科技支撑项目子课题一项、辽宁省科学计划项目课题一项。参加国家自然科学基金课题两项、国家科技支撑项目一项及辽宁省自然科学基金、国家电力公司科技部课题等省部级以上课题十余项。在《International Journal Agricultural Biological Engineering》、《农业工程学报》及国际会议等发表学术论文40余篇，其中SCI检索2篇，EI检索20余篇。获辽宁省科技进步三等奖一项（2017）、沈阳市科技进步一等奖一项（2010）、二等奖一项（2006）。主编全国高等院校通用教材4部，副主编2部。"
}

export const PersonCard = (props: PersonCardProps) => {
    const src = "https://u-pic.oss-cn-beijing.aliyuncs.com/uPic/WOBSmg.jpg"
    const width = props.width || defaultProps.width
    const height = props.height || defaultProps.height
    const [isFlip, setIsFlip] = useState(false)
    const [rootStyle, setRootStyle] = useState("person-card-container")
    const [contentStyle, setContentStyle] = useState("person-card-content")
    const [imageSubStyle, setImageSubStyle] = useState("person-card-image-sub-container")
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
                    <div onMouseEnter={clearTask} onMouseLeave={recover} className="person-card-back" >
                        {<PersonDesc teacher={teacher} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
import Box from "@mui/material/Box/Box"
import Card from "@mui/material/Card/Card"
import CardActionArea from "@mui/material/CardActionArea/CardActionArea"
import CardContent from "@mui/material/CardContent/CardContent"
import CardMedia from "@mui/material/CardMedia/CardMedia"
import Typography from "@mui/material/Typography/Typography"
import { Divider } from "../../Divider/Divider"
import Icon from '@mui/material/Icon'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import "./KCardListItem.scss"

/** 默认页脚，渲染pv与发布时间信息 */
export const KCardListItemDefaultFoot = (props: { pv: number, time: string | number }) => {
    const { pv, time } = props
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, display: "flex", verticalAlign: "middle", justifyContent: "flex-start" }}>
                <Icon component="div" children={<VisibilityOutlinedIcon style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", paddingBottom: "1px" }} />} />
                <span style={{ alignSelf: "center", fontSize: "13px", color: "rgba(0,0,0,0.7)", fontWeight: 500, marginTop: "2px" }}>{pv}</span>
            </div>
            <div style={{ flex: 1, display: "flex", verticalAlign: "middle", justifyContent: "flex-end" }}>
                <Icon component="div" children={<QueryBuilderOutlinedIcon style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", paddingBottom: "1px" }} />} />
                <span style={{ alignSelf: "center", fontSize: "13px", color: "rgba(0,0,0,0.7)", fontWeight: 500, marginTop: "2px" }}>{time}</span>
            </div>
        </div>
    )
}

export interface KCardListItemProps {
    className?: string,
    onClick?: () => void,
    /** 卡片宽度（defalut: 240） */
    width?: number,
    /** 卡片高度 (defalut: 250) */
    height?: number,
    /** 图片地址 */
    src: string,
    /** 卡片标题 */
    title: string,
    /** 若非直接指定divider=false，否则若具有foot属性则认为divider为true */
    divider?: boolean
    foot?: JSX.Element

}
const defaultProps = {
    width: 240,
    height: 250,
    className: "k-card-list-item-container",
    divider: false
}

export const KCardListItem = (props: KCardListItemProps) => {
    const { src, foot } = props
    const width = props.width || defaultProps.width
    const height = props.height || defaultProps.height
    const className = props.className ? defaultProps.className + " " + props.className : defaultProps.className
    const divider = props.divider === false ? false : (!!foot || defaultProps.divider)
    return (
        <Card className={className} sx={{ width, height }} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height - 120}
                    image={src}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="subtitle2" color="text.first">
                        三亚学院信息与智能工程学院教师招聘公告
                    </Typography>
                    {divider ? <Divider className="k-card-list-item-hr" /> : null}
                    {foot ? foot : null}
                </CardContent>

            </CardActionArea>
        </Card>
    )
}
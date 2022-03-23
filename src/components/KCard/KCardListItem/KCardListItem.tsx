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
export interface KCardListItemProps {
    className?: string,
    onClick?: () => void,
    width?: number,
    height?: number,
    src: string,

}
const defaultProps = {
    width: 240,
    height: 250,
    className: "k-card-list-item-container"
}
export const KCardListItem = (props: KCardListItemProps) => {
    const { src } = props
    const width = props.width || defaultProps.width
    const height = props.height || defaultProps.height
    const className = props.className ? defaultProps.className + " " + props.className : defaultProps.className
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
                    <Divider className="k-card-list-item-hr" />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ flex: 1, display: "flex", verticalAlign: "middle", justifyContent: "flex-start" }}>
                            <Icon component="div" children={<VisibilityOutlinedIcon style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", paddingBottom: "1px" }} />} />
                            <span style={{ alignSelf: "center", fontSize: "13px", color: "rgba(0,0,0,0.7)", fontWeight: 500, marginTop: "2px" }}>200</span>
                        </div>
                        <div style={{ flex: 1, display: "flex", verticalAlign: "middle", justifyContent: "flex-end" }}>
                            <Icon component="div" children={<QueryBuilderOutlinedIcon style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", paddingBottom: "1px" }} />} />
                            <span style={{ alignSelf: "center", fontSize: "13px", color: "rgba(0,0,0,0.7)", fontWeight: 500, marginTop: "2px" }}>2023/3/23</span>
                        </div>
                    </div>

                </CardContent>

            </CardActionArea>
        </Card>
    )
}
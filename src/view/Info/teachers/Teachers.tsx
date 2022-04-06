import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box/Box"
import { PersonCard } from "../../../components/PersonCard/PersonCard"
import { Teacher } from "../../../type"

const useStyles = makeStyles({
    card: {
        width: "140px",
        height: "300px",
        display: "inline-block",
        padding: "0 20px 0",
        marginLeft: "20px",
        marginRight: "20px",
        transition: "all 0.4s",
        // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        "&:hover": {
            width: "200px",
            height: "300px"
            // marginBottom: "20px"
        }
    }
})
const teacher: Teacher = {
    name: "杨涛",
    sex: 0,
    level: "执行院长",
    tag: "博士，教授，博士生导师".split("，"),
    profession: "大数据、人工智能、高性能计算、农业领域".split("、"),
    describe: "主持国家自然科学基金项目一项、国家科技支撑项目子课题一项、辽宁省科学计划项目课题一项。参加国家自然科学基金课题两项、国家科技支撑项目一项及辽宁省自然科学基金、国家电力公司科技部课题等省部级以上课题十余项。在《International Journal Agricultural Biological Engineering》、《农业工程学报》及国际会议等发表学术论文40余篇，其中SCI检索2篇，EI检索20余篇。获辽宁省科技进步三等奖一项（2017）、沈阳市科技进步一等奖一项（2010）、二等奖一项（2006）。主编全国高等院校通用教材4部，副主编2部。"
}
const teachers = new Array(6).fill(teacher) as Teacher[]

export const Teachers = () => {
    const styles = useStyles()
    return (
        <Box>
            <div>{teachers.map((teacher, index) => {
                return (
                    <div className={styles.card}>
                        <PersonCard key={index} teacher={teacher} back={{ width: 200, height: 300 }} />
                    </div>
                )
            })}</div>
        </Box>
    )
}
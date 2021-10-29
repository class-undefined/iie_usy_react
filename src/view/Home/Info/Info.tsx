import "./Info.scss"
import Typography from '@mui/material/Typography';
export const Info = () => {
    return (
        <div className={'college-profile'}>
            <div className={'college-profile-main'}>
                <h2 className={'college-profile-title'}>学院简述</h2>
                <Typography variant="body2" className={'college-profile-detail'} gutterBottom>
                    三亚学院信息与智能工程学院是我校在自贸港建设背景下为主动应对新一轮科技革命与产业变革，支撑服务创新驱动发展而组建。学院下设计算机科学与技术、软件工程(含区块链方向)、数据科学与大数据技术、智能科学与技术五个本科专业（含方向）。现为海南省电子信息硕士点建设学院、海南省高等学校“三全育人”综合改革试点学院。学院拥有计算机应用基础实验教学示范中心、首个民办高校自筹自建的高性能计算中心（超算中心）、陈国良院士创新团队、容淳铭院士工作站、人工智能实验室、大数据可视化实验室等教学资源。学院聚焦工业互联网产业、海南自贸港区域经济发展需求，依托超算中心及工业互联网实验室，构建1+1+X学科平台，现已形成自然语言处理、数据信息安全、计算机视觉、热带特色智慧农业等四个成熟稳定的学科方向和学科团队。学院采用“政产学研用”一体化人才培养模式，与吉利控股集团、中科院深海所、遥感所、南繁研究院等单位共建二十余家实习实训基地与人才联合培养基地，为社会经济发展培养具有工程应用能力与创新精神的复合应用型专业技术人才。
                </Typography>
            </div>
        </div>
    )
}

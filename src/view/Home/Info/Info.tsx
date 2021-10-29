import "./Info.scss"
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import React, {MouseEvent} from 'react';
import {ButtonBaseActions} from '@mui/material';
const tellMessage: Array<{icon: React.FC, content: string}> = [
    {
        icon: LocalPhoneIcon,
        content: '0898-88385452'
    },
    {
        icon: MailOutlineIcon,
        content: 'iieoffice@163.com'
    },{
        icon: HomeIcon,
        content: '海南省三亚市吉阳区学院路191号'
    },
]
export const Info = () => {
    /* TODO: 单击复制 */
    const copyToClipboard = (content: string) => {
        return (event: MouseEvent<HTMLButtonElement>) => {
            const {target} = event
            console.log(target);
            event.preventDefault()
        }
    }
    return (
        <div className={'college-profile'}>
            <div className={'college-profile-main'}>
                <h2 className={'college-profile-title'}>学院简述</h2>
                <Typography variant="body2" className={'college-profile-detail'} gutterBottom>
                    三亚学院信息与智能工程学院是我校在自贸港建设背景下为主动应对新一轮科技革命与产业变革，支撑服务创新驱动发展而组建。学院下设计算机科学与技术、软件工程(含区块链方向)、数据科学与大数据技术、智能科学与技术五个本科专业（含方向）。现为海南省电子信息硕士点建设学院、海南省高等学校“三全育人”综合改革试点学院。学院拥有计算机应用基础实验教学示范中心、首个民办高校自筹自建的高性能计算中心（超算中心）、陈国良院士创新团队、容淳铭院士工作站、人工智能实验室、大数据可视化实验室等教学资源。学院聚焦工业互联网产业、海南自贸港区域经济发展需求，依托超算中心及工业互联网实验室，构建1+1+X学科平台，现已形成自然语言处理、数据信息安全、计算机视觉、热带特色智慧农业等四个成熟稳定的学科方向和学科团队。学院采用“政产学研用”一体化人才培养模式，与吉利控股集团、中科院深海所、遥感所、南繁研究院等单位共建二十余家实习实训基地与人才联合培养基地，为社会经济发展培养具有工程应用能力与创新精神的复合应用型专业技术人才。
                </Typography>
            </div>
            <div className={'college-tell-me'}>
                <h2 className={'college-profile-title'}>联系我们</h2>
                <div className={'college-tell-me-list'}>
                    {
                        tellMessage.map((item, index) => {
                            return (
                                <Button onClick={copyToClipboard(item.content)} className={'college-tell-me-list-item'} key={index} startIcon={<item.icon/>}>
                                    {item.content}
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

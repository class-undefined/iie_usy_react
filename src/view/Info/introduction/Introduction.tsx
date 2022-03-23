import { useEffect } from 'react'
import { getIntroductionData } from '../../../api/Info/introduction'
import { Article } from '../../../components/Article'
import { createAction, ICard, ICardProps } from '../../../components/Card/ICard'
import "./Introduction.scss"
export const Introduction = () => {
    // const action = createAction('SHARE')
    // const iCardProps: ICardProps = {
    //     image: 'http://iie.sanyau.edu.cn/Public/photo/thumb_1640847325_560371197.jpg',
    //     title: '三亚学院信息与智能工程学院教师招聘公告',
    //     content: '三亚学院信息与智能工程学院教师招聘公告balabala',
    //     actions: [action]
    // }
    useEffect(() => { }, [])
    return (
        <div>
            <Article className='introduction-article' article={getIntroductionData()} />
            {/* <ICard {...iCardProps}/>
            
            Introduction */}
        </div>
    )
}